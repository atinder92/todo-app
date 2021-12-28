import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";
import SIGNUP from "../mutations/Signup";
import query from "../queries/CurrentUser";
import AuthForm from "./AuthForm";
const Signup = () => {
  const { data, refetch } = useQuery(query);
  const [signUpError, setSignUpError] = useState({});
  const [signup] = useMutation(SIGNUP);
  if (data && data.currentUser) {
    return <Redirect to="/dashboard" />;
  }
  const authFormSubmitHandler = ({ email, password }) => {
    signup({
      variables: { email, password },
      onCompleted: (data) => {
        const token = data.signup.token;
        localStorage.setItem("todo_token", token);
        refetch();
      },
      onError: (res) => {
        setSignUpError(JSON.parse(res.message));
      },
    });
  };
  return (
    <div>
      <AuthForm type="signup" onSubmit={authFormSubmitHandler} error={signUpError}/>
    </div>
  );
};
export default Signup;
