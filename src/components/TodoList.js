import React, { useState } from "react";
import { Event as EventIcon } from "@mui/icons-material";
import TodoListItem from "./TodoListItem";
import { Alert, ToggleButtonGroup, ToggleButton } from "@mui/material";
const TodoList = (props) => {
  const [todoView, setTodoView] = useState("list");

  const selectViewHandler = (_, view) => {
    setTodoView(view);
  };
  return (
    <div className="todo-list-container">
      <h2>
        <EventIcon /> What's upcoming
      </h2>
      <div>
        <ToggleButtonGroup
          color="primary"
          exclusive
          onChange={selectViewHandler}
        >
          <ToggleButton value="list">List</ToggleButton>
          <ToggleButton value="calendar">Calendar</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {todoView === "list" ? (
        <div>
          {props.todos.map((todo) => {
            return <TodoListItem todo={todo} key={todo._id} />;
          })}
          {props.todos.length === 0 && (
            <Alert severity="info">
              Nothing to display! Please create some todo items.
            </Alert>
          )}
        </div>
      ) : (
        <div>
          <h3>Calendar View</h3>
        </div>
      )}
    </div>
  );
};

export default TodoList;
