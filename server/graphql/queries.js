const graphql = require("graphql");
const UserType = require("./types/User");
const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = graphql;
const User = require("../mongoose/schemas/User");
const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, {id}) {
        return User.findById(id);
      }
    }
  })
});

module.exports = RootQueryType;
