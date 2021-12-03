import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DELETE_TODO from "../mutations/DeleteTodo";
import query from "../queries/CurrentUser";
import { useMutation } from "@apollo/client";

const DeleteTodoDialog = (props) => {
  const [deleteTodo] = useMutation(DELETE_TODO);
  const deleteTodoHandler = (id) => {
    deleteTodo({
      variables: { id },
      refetchQueries: [{ query }],
      onCompleted: () => {
        props.handleClose();
      },
    });
  };
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle id="alert-dialog-title">
        {"Are you sure, you want to delete your to-do item ?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => deleteTodoHandler(props.todoId)}>Yes</Button>
        <Button onClick={props.handleClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteTodoDialog;
