const { sign } = require("jsonwebtoken");
const createToken = (user) => {
  const token = sign({ userId: user.id}, "some_secret", {
    algorithm: "HS256",
    expiresIn: "1d",
  });
  return token;
};

module.exports = {
  createToken,
};
