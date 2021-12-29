import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import LOGIN from "../mutations/Login";
import query from "../queries/CurrentUser";
import AuthForm from "./AuthForm";
import { Alert } from "@mui/material";
const Login = () => {
  const { data, loading, refetch } = useQuery(query);
  const [loginError, setLoginError] = useState({});
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [login] = useMutation(LOGIN);
  if (data && data.currentUser) {
    return <Redirect to="/dashboard" />;
  }
  if (loading) return <div>Loading..</div>;
  const authFormSubmitHandler = ({ email, password }) => {
    login({
      variables: { email, password },
      onCompleted: (data) => {
        if (!data.login) {
          setInvalidLogin(true);
          return;
        }
        const token = data.login.token;
        localStorage.setItem("todo_token", token);
        refetch();
      },
      onError: (res) => {
        const errors = JSON.parse(res.message).errors;
        setLoginError(errors);
      },
    });
  };
  return (
    <div>
      <AuthForm
        type="login"
        onSubmit={authFormSubmitHandler}
        resetError={() => setLoginError({})}
        error={loginError}
      />
      {invalidLogin && (
        <Alert className="invalid-login-error" severity="error">
          Invalid login! Please try again
        </Alert>
      )}
    </div>
  );
};
export default Login;
