const { sign } = require("jsonwebtoken");

/**
 * Create auth token for frontend
 */
const createToken = (user) => {
  const token = sign({ userId: user.id }, "some_secret", {
    algorithm: "HS256",
    expiresIn: "1d",
  });
  return token;
};

/**
 * Build error object for title and description
 * Title and description fields are required for todo object
 * @param {*} err 
 * @returns 
 */
const buildErrorObject = (err) => {
  const errors = {};
  if (err.errors["title"]) {
    errors["title"] = err.errors["title"].message;
  }
  if (err.errors["description"]) {
    errors["description"] = err.errors["description"].message;
  }
  return errors;
};

/**
 * Throw error if email or password are empty during login
 * @param {*} email 
 * @param {*} password 
 */
const checkEmailAndPasswordForLogin = (email, password) => {
  const errors = {};
  email = email.trim();
  password = password.trim();
  let error = new Error();
  error.errors = errors;
  if(email === "") {
    errors["email"] = "Email is required";
    throw error;
  }
  if(password === "") {
    errors["password"] = "Password is required";
    throw error;
  }
};

/**
 * Build error object for signup process
 * @param {*} err 
 * @returns 
 */
const buildErrorObjectUser = (err) => {
  const errors = {};
  if (err.code == 11000 && err.keyPattern.email) {
    errors["email"] = "Email already registered";
  }
  if (err.errors && err.errors["email"]) {
    errors["email"] = err.errors["email"].message;
  }
  if (err.errors && err.errors["password"]) {
    errors["password"] = err.errors["password"].message;
  }
  return errors;
};

module.exports = {
  createToken,
  buildErrorObject,
  buildErrorObjectUser,
  checkEmailAndPasswordForLogin,
};
