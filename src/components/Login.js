import React from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import LOGIN from "../mutations/Login";
import AuthForm from "./AuthForm";
const Login = () => {
  const history = useHistory();
  const [login] = useMutation(LOGIN);
  const authFormSubmitHandler = ({ email, password }) => {
    login({
      variables: { email, password },
      onCompleted: (data) => {
        const token = data.login.token;
        localStorage.setItem("todo_token", token);
        history.push("/dashboard");
      },
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div>
      <AuthForm type="login" onSubmit={authFormSubmitHandler} />
    </div>
  );
};
export default Login;
