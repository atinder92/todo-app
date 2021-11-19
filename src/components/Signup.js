import React from "react";
import AuthForm from "./AuthForm";
const Signup = () => {
  const authFormSubmitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <div>
      <AuthForm type="signup" onSubmit={authFormSubmitHandler} />
    </div>
  );
};
export default Signup;
