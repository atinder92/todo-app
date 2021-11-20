const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;
const Todo = require("../../mongoose/schemas/Todo");
var userType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    todos: {
      type: new GraphQLList(require("./Todo")),
      resolve(parentValue) {
        return Todo.find({createdBy: parentValue.id});
      },
    },
  },
});

module.exports = userType;
