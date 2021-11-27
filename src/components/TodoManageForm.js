import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
const TodoManageForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({title,description});
  }
  return (
    <form className="todo-manage-form">
      <div className="form-control">
        <TextField
          id="title"
          autoComplete="off"
          label="Title"
          value={title}
          fullWidth
          variant="standard"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <TextField
          id="description"
          autoComplete="off"
          label="Description"
          value={description}
          fullWidth
          variant="standard"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <Button variant="outlined" onClick={formSubmitHandler}>
        Create Todo
      </Button>
    </form>
  );
};
export default TodoManageForm;
