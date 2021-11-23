const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date
  type User {
    id: String!
    name: String
    email: String!
    todos: [Todo!]
  }
  type Todo {
    title: String!
    description: String
    dueDate: Date!
    createdDate: Date!
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  # Querys
  type Query {
    getUsers: [User]
    currentUser: User
  }

  # Mutations
  type Mutation {
    createTodo(title: String!, description: String!, createdBy: ID!): Todo
    updateTodo(id: ID!): Todo
    deleteTodo(id: ID!): Todo
    signup(email: String!, password: String!): AuthData
    login(email: String!, password: String!): AuthData
  }
`;
module.exports = { typeDefs };
