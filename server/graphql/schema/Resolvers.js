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
    createTodo(parentVal, { title, description, createdBy }) {
      return new Todo({ title, description, createdBy }).save();
    },
    signup(parentVal, { email, password }) {
      return new User({ email, password }).save();
    },
  },
};

module.exports = { resolvers };
