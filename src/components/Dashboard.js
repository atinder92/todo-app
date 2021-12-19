import React, { useState } from "react";
import query from "../queries/CurrentUser";
import { useQuery, useMutation } from "@apollo/client";
import CREATE_TODO from "../mutations/CreateTodo";
import TodoManageForm from "./TodoManageForm";
import TodoList from "./TodoList";
import { Alert } from "@mui/material";

const Dashboard = () => {
  const [createTodoError, setCreateTodoError] = useState({});
  const {
    data: uData,
    loading: loadingCurrentUser,
    error: currentUserError,
  } = useQuery(query);
  const [createTodo] = useMutation(CREATE_TODO);
  if (loadingCurrentUser) return <div>Loading...</div>;
  if (currentUserError) return <div>Error...</div>;
  const formSubmitHandler = ({ title, description, dueDate }) => {
    setCreateTodoError({});
    dueDate = new Date(dueDate);
    createTodo({
      variables: {
        title: title,
        description: description,
        createdBy: uData.currentUser.id,
        dueDate,
      },
      refetchQueries: [{ query }],
      onError: (res) => {
        setCreateTodoError(JSON.parse(res.message));
      },
    });
  };
  return (
    <div className="dashboard-container">
      <TodoManageForm onSubmit={formSubmitHandler} />
      {Object.keys(createTodoError).length > 0 && (
        <Alert severity="error">Please enter title and description</Alert>
      )}
      <TodoList todos={uData.currentUser.todos} />
    </div>
  );
};

export default Dashboard;
