const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

var userType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

module.exports = userType;
