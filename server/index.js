const { ApolloServer } = require('apollo-server');
const mongoose = require("mongoose");
const { DB_URL } = require("./constants");
const {typeDefs} = require("./graphql/schema/TypeDefs");
const {resolvers} = require("./graphql/schema/Resolvers");
const server = new ApolloServer({ typeDefs, resolvers });
//Set up default mongoose connection
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//log any connection success / errors
db.on('connected',() => console.log("MongoDB connection successful"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});