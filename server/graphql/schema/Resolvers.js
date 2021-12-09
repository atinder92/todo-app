const bcrypt = require("bcryptjs");
const { createToken } = require("../../utils");
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
    async currentUser(_, args, { userId }) {
      if (!userId) return null;
      const currentUser = await User.findById(userId);
      return currentUser;
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
      const user = await new User({ email, password: hashedPassword }).save();
      const token = createToken(user);
      return { userId: user.id, token, tokenExpiration: 1 };
    },
    async login(_, { email, password }) {
      const user = await User.findOne({ email });
      if (!user) return null;
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return null;
      const token = createToken(user);
      return { userId: user.id, token, tokenExpiration: 1 };
    },
    async createTodo(parentVal, { title, description, createdBy, dueDate }) {
      dueDate = new Date(dueDate);
      try {
        const todo = await new Todo({
          title,
          description,
          createdBy,
          dueDate,
        }).save();
        return todo;
      } catch (err) {
        const errors = {
          title: err.errors["title"].message,
          description: err.errors["description"].message,
        };
        throw new Error(JSON.stringify(errors));
      }
    },
    async deleteTodo(parentVal, { id }) {
      await Todo.deleteOne({ _id: id });
      return { id };
    },
  },
};

module.exports = { resolvers };
