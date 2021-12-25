import React, { useState } from "react";
import query from "../queries/CurrentUser";
import mutation from "../mutations/EditTodo";
import TodoManageForm from "./TodoManageForm";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import { Alert } from "@mui/material";

const EditTodo = () => {
  const [editTodoError, setEditTodoError] = useState({});
  const { data, loading } = useQuery(query);
  const history = useHistory();
  const { refetch } = useQuery(query);
  const [editTodo] = useMutation(mutation);
  const { id } = useParams();
  if (loading) return <div>Loading...</div>;
  const currentTodo = data.currentUser.todos.find((todo) => todo._id === id);
  const editTodoHandler = (todo) => {
    const dueDate = new Date(todo.dueDate);
    editTodo({
      variables: {
        id,
        ...todo,
        dueDate,
      },
      onCompleted: () => {
        refetch();
        history.push("/dashboard");
      },
      onError: (res) => {
        setEditTodoError(JSON.parse(res.message));
      },
    });
  };
  return (
    <div>
      <TodoManageForm
        headerText={"Edit To-do"}
        buttonText={"Save"}
        title={currentTodo.title}
        description={currentTodo.description}
        dueDate={currentTodo.dueDate}
        onSubmit={editTodoHandler}
      />
      {Object.keys(editTodoError).length > 0 && (
        <Alert severity="error">Please enter title and description</Alert>
      )}
    </div>
  );
};
export default EditTodo;
