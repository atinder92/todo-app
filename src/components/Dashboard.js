import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import query from "../queries/CurrentUser";
import { useQuery, useMutation } from "@apollo/client";
import { Dialog } from "@mui/material";
import CREATE_TODO from "../mutations/CreateTodo";
import TodoManageForm from "./TodoManageForm";
import TodoList from "./TodoList";

const Dashboard = () => {
  const [createTodoError, setCreateTodoError] = useState({});
  const [open, setOpen] = useState(false);
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
      onCompleted: () => {
        setOpen(false);
      },
      onError: (res) => {
        setCreateTodoError(JSON.parse(res.message));
      },
    });
  };
  const resetErrorHandler = () => {
    setCreateTodoError({});
  };
  return (
    <div className="dashboard-container">
      <div className="create-event-container">
        <h2>Create Event</h2>
        <AddCircleIcon
          color="action"
          fontSize="large"
          onClick={() => setOpen(true)}
        />
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth={true}>
        <TodoManageForm
          onSubmit={formSubmitHandler}
          resetError={resetErrorHandler}
          error={createTodoError}
        />
      </Dialog>
      <TodoList todos={uData.currentUser.todos} />
    </div>
  );
};

export default Dashboard;
