import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
const TodoManageForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(+new Date());
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({ title, description, dueDate });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <h2><CreateIcon/> Create To-Do </h2>
      <form className="todo-manage-form">
        <div className="form-control">
          <TextField
            id="title"
            autoComplete="off"
            label="Title"
            value={title}
            fullWidth
            variant="outlined"
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
            multiline
            rows={5}
            variant="outlined"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <DesktopDatePicker
            label="Due Date"
            inputFormat="dd/MM/yyyy"
            value={dueDate}
            onChange={(newValue) => {
              setDueDate(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <Button variant="outlined" onClick={formSubmitHandler}>
          Create Todo
        </Button>
      </form>
    </LocalizationProvider>
  );
};
export default TodoManageForm;
