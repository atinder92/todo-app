import React, { useState } from "react";
import query from "../queries/CurrentUser";
import mutation from "../mutations/EditTodo";
import TodoManageForm from "./TodoManageForm";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";

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
  const resetErrorHandler = () => {
    setEditTodoError({});
  };
  return (
    <div>
      <TodoManageForm
        headerText={"Edit Event"}
        buttonText={"Save"}
        title={currentTodo.title}
        description={currentTodo.description}
        dueDate={currentTodo.dueDate}
        error={editTodoError}
        resetError={resetErrorHandler}
        onSubmit={editTodoHandler}
      />
    </div>
  );
};
export default EditTodo;
