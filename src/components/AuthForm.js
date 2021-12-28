import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({ email, password });
  };
  return (
    <div className="auth-form">
      <h2>{props.type === "login" ? "Login" : "Signup"}</h2>
      <form>
        <div className="form-control">
          <TextField
            id="email"
            error={props.error.email !== undefined}
            helperText={props.error.email}
            autoComplete="off"
            label="Email"
            value={email}
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <TextField
            autoComplete="off"
            id="password"
            error={props.error.password !== undefined}
            helperText={props.error.password}
            value={password}
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button variant="outlined" onClick={formSubmitHandler}>
          {props.type === "login" ? "Login" : "Signup"}
        </Button>
      </form>
    </div>
  );
};
export default AuthForm;
