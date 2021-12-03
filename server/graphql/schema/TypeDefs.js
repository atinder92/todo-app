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
    _id: ID!
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
  type DeleteTodo {
    id: ID!
  }

  # Querys
  type Query {
    getUsers: [User]
    currentUser: User
  }

  # Mutations
  type Mutation {
    createTodo(title: String!, description: String!, createdBy: ID!, dueDate: String!): Todo
    updateTodo(id: ID!): Todo
    deleteTodo(id: ID!): DeleteTodo
    signup(email: String!, password: String!): AuthData
    login(email: String!, password: String!): AuthData
  }
`;
module.exports = { typeDefs };
