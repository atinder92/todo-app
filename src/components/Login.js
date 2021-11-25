import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import LOGIN from "../mutations/Login";
import query from "../queries/CurrentUser";
import AuthForm from "./AuthForm";
const Login = () => {
  const { data, loading, refetch } = useQuery(query);
  const [login] = useMutation(LOGIN);
  if (data && data.currentUser) {
    return <Redirect to="/dashboard" />;
  }
  if (loading) return <div>Loading..</div>;
  const authFormSubmitHandler = ({ email, password }) => {
    login({
      variables: { email, password },
      onCompleted: (data) => {
        const token = data.login.token;
        localStorage.setItem("todo_token", token);
        refetch();
      },
    });
  };
  return (
    <div>
      <AuthForm type="login" onSubmit={authFormSubmitHandler} />
    </div>
  );
};
export default Login;
