const { dateScalar } = require("../scalars/date");
const Todo = require("../../mongoose/schemas/Todo");
const User = require("../../mongoose/schemas/User");
const resolvers = {
  Date: dateScalar,
  Query: {
    getUsers() {
        return [];
    }
  },
  Mutation: {
    createTodo(parentVal, {title, description, createdBy}) {
      return new Todo({ title, description, createdBy }).save();
    },
    signup(parentVal, {email, password}) {
      return new User({ email, password }).save();
    },
  },
};

module.exports = { resolvers };
