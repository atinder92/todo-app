import React from "react";
import { Event as EventIcon } from "@mui/icons-material";
import TodoListItem from "./TodoListItem";
import { Alert } from "@mui/material";
const TodoList = (props) => {
  return (
    <div className="todo-list-container">
      <h2>
        <EventIcon /> What's upcoming
      </h2>
      <>
        {props.todos.map((todo) => {
          return <TodoListItem todo={todo} key={todo._id} />;
        })}
        {props.todos.length === 0 && (
          <Alert severity="info">
            Nothing to display! Please create some todo items.
          </Alert>
        )}
      </>
    </div>
  );
};

export default TodoList;
