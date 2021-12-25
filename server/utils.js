const { sign } = require("jsonwebtoken");
const createToken = (user) => {
  const token = sign({ userId: user.id}, "some_secret", {
    algorithm: "HS256",
    expiresIn: "1d",
  });
  return token;
};

const buildErrorObject = (err) => {
  const errors = {};
  if(err.errors["title"]) {
    errors["title"] = err.errors["title"].message;
  }
  if(err.errors["description"]) {
    errors["description"] = err.errors["description"].message
  }
  return errors;
}

module.exports = {
  createToken,
  buildErrorObject
};
