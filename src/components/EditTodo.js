import React from "react";
import query from "../queries/CurrentUser";
import mutation from "../mutations/EditTodo";
import TodoManageForm from "./TodoManageForm";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";

const EditTodo = () => {
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
    });
  };
  return (
    <div>
      <TodoManageForm
        headerText={"Edit To-do"}
        buttonText={"Edit"}
        title={currentTodo.title}
        description={currentTodo.description}
        dueDate={currentTodo.dueDate}
        onSubmit={editTodoHandler}
      />
    </div>
  );
};
export default EditTodo;
