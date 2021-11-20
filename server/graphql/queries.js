const graphql = require("graphql");
const UserType = require("./types/User");
const { GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return {};
      }
    }
  })
});

module.exports = RootQueryType;