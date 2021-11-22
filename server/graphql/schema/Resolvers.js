const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { dateScalar } = require("../scalars/date");
const Todo = require("../../mongoose/schemas/Todo");
const User = require("../../mongoose/schemas/User");
const resolvers = {
  Date: dateScalar,
  Query: {
    async getUsers() {
      const users = await User.find({});
      return users;
    },
  },
  User: {
    async todos(parentVal) {
      const todos = await Todo.find({ createdBy: parentVal.id });
      return todos;
    },
  },
  Mutation: {
    async signup(_, { email, password }) {
      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(password, salt);
      return new User({ email, password: hashedPassword }).save();
    },
    async login(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) return null;
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return null;
      const token = sign(
        { userId: user.id, email: user.email },
        "some_secret",
        {
          algorithm: "HS256",
          expiresIn: "1d",
        }
      );
      return {userId: user.id, token, tokenExpiration: 1}
    },
    createTodo(parentVal, { title, description, createdBy }) {
      return new Todo({ title, description, createdBy }).save();
    },
  },
};

module.exports = { resolvers };
