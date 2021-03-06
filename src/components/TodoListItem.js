import React, { useState } from "react";
import { Link } from "react-router-dom";
import format from 'date-fns/format'
import { Edit, Delete } from "@mui/icons-material";
import DeleteTodoDialog from "./DeleteTodoDialog";
const TodoListItem = ({ todo }) => {
  const [displayDeleteDialog, setDisplayDeleteDialog] = useState(false);
  return (
    <div className="todo-list-item">
      <div className="todo-list-item-date-container">
        {format(todo.dueDate,'d')}<br/>
        {format(todo.dueDate,'LLL')}<br/>
        {format(todo.dueDate,'YYY')}
      </div>
      <div className="todo-list-item-text-container">
        <div className="todo-list-item-title">{todo.title}</div>
        <div className="todo-list-item-description">{todo.description}</div>
      </div>
      <div className="todo-list-item-edit-button">
        <Link to={`/edit/${todo._id}`}>
          <Edit />
        </Link>
      </div>
      <div
        className="todo-list-item-edit-button"
        onClick={() => setDisplayDeleteDialog(true)}
      >
        <Delete />
      </div>
      <DeleteTodoDialog
        open={displayDeleteDialog}
        todoId={todo._id}
        handleClose={() => setDisplayDeleteDialog(false)}
      />
    </div>
  );
};
export default TodoListItem;
