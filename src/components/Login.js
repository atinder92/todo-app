import React from "react";
import AuthForm from "./AuthForm";
const Login = () => {
  const authFormSubmitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <div>
      <AuthForm type="login" onSubmit={authFormSubmitHandler} />
    </div>
  );
};
export default Login;
