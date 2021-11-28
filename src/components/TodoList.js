import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import EventIcon from "@mui/icons-material/Event";

const TodoList = (props) => {
  return (
    <div className="todo-list-container">
      <h2>
        <EventIcon /> What's upcoming
      </h2>
      <List>
        {props.todos.map((todo) => {
          return (
            <ListItem>
              <ListItemText primary={todo.title} secondary={todo.description}></ListItemText>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default TodoList;
