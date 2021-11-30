import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteTodoDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle id="alert-dialog-title">
        {"Are you sure, you want to delete your to-do item ?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={props.handleDelete}>Yes</Button>
        <Button onClick={props.handleClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteTodoDialog;
