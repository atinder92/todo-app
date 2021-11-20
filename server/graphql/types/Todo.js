const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const todoType = new GraphQLObjectType({
  name: "TodoType",
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    dueDate: { type: GraphQLInt },
    createdDate: { type: GraphQLInt },
  },
});

module.exports = todoType;
