import React, { useState } from "react";
import { Edit, Delete } from "@mui/icons-material";
import DeleteTodoDialog from "./DeleteTodoDialog";
const TodoListItem = ({ todo }) => {
  const [displayDeleteDialog, setDisplayDeleteDialog] = useState(false);
  return (
    <div className="todo-list-item">
      <div className="todo-list-item-text-container">
        <div className="todo-list-item-title">{todo.title}</div>
        <div className="todo-list-item-description">{todo.description}</div>
      </div>
      <div className="todo-list-item-edit-button">
        <Edit />
      </div>
      <div
        className="todo-list-item-edit-button"
        onClick={() => setDisplayDeleteDialog(true)}
      >
        <Delete />
      </div>
      <DeleteTodoDialog
        open={displayDeleteDialog}
        todoId = {todo._id}
        handleClose={() => setDisplayDeleteDialog(false)}
      />
    </div>
  );
};
export default TodoListItem;
