const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require("./types/User");
const TodoType = require("./types/Todo");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
          return {};
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
          return {};
      },
    },
    createTodo: {
        type: TodoType,
        args: {
            title: {type: GraphQLString},
            description: {type: GraphQLString},
        },
        resolve(parentValue,{title, description}) {
            return {};
        }
    }
  },
});
module.exports = mutation;
