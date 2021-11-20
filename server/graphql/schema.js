const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const queries = require('./queries');
const mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: queries,
  mutation: mutations
});