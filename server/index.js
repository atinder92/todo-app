const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressJwt = require("express-jwt");
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require("express");
const http = require('http');
const { DB_URL } = require("./constants");
const { typeDefs } = require("./graphql/schema/TypeDefs");
const { resolvers } = require("./graphql/schema/Resolvers");

async function startApolloServer(typeDefs, resolvers) {
  //Set up default mongoose connection
  mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  //Get the default connection
  var db = mongoose.connection;
  //log any connection success / errors
  db.on("connected", () => console.log("MongoDB connection successful"));
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  const app = express();
  app.use(cors());
  app.use(expressJwt({
    secret: "some_secret",
    algorithms: ["HS256"],
    credentialsRequired: false,
    getToken: (req) => {
      return req.headers.authorization;
    }
  }));

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({req}) => {
      const user = req.user || null;
      return user;
    }
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers);