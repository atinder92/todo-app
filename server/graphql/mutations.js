const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const UserType = require("./types/User");
const TodoType = require("./types/Todo");
const Todo = require("../mongoose/schemas/Todo");
const User = require("../mongoose/schemas/User");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }) {
        return new User({ email, password }).save();
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }) {
        return {};
      },
    },
    createTodo: {
      type: TodoType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        createdBy: { type: GraphQLID }
      },
      resolve(parentValue, { title, description, createdBy }) {
        return new Todo({ title, description, createdBy }).save();
      },
    },
  },
});
module.exports = mutation;
