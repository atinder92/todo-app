import React from "react";
import { Event as EventIcon } from "@mui/icons-material";
import TodoListItem from "./TodoListItem";
const TodoList = (props) => {
  return (
    <div className="todo-list-container">
      <h2>
        <EventIcon /> What's upcoming
      </h2>
      <>
        {props.todos.map((todo) => {
          return <TodoListItem todo={todo} key={todo._id}/>;
        })}
      </>
    </div>
  );
};

export default TodoList;
