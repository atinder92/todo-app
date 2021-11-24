import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import LOGIN from "../mutations/Login";
import query from "../queries/CurrentUser";
import AuthForm from "./AuthForm";
const Login = () => {
  const history = useHistory();
  const { data } = useQuery(query);
  if (data && data.currentUser) {
    history.push("/dashboard");
  }
  const [login] = useMutation(LOGIN);
  const authFormSubmitHandler = ({ email, password }) => {
    login({ variables: { email, password }, refetchQueries: { query } })
      .then(({ data }) => {
        // on successful login store token
        const token = data.login.token;
        localStorage.setItem("todo_token", token);
      })
      .catch((err) => {
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
