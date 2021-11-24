import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import SIGNUP from "../mutations/Signup";
import AuthForm from "./AuthForm";
const Signup = () => {
  const history = useHistory();
  const [signup] = useMutation(SIGNUP);
  const authFormSubmitHandler = ({ email, password }) => {
    signup({
      variables: { email, password },
      onCompleted: (data) => {
        const token = data.signup.token;
        localStorage.setItem("todo_token", token);
        history.push("/dashboard");
      },
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div>
      <AuthForm type="signup" onSubmit={authFormSubmitHandler} />
    </div>
  );
};
export default Signup;
