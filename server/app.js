const express = require("express");
const mongoose = require("mongoose");
const { PORT, DB_URL } = require("./constants");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
// set up express application
const app = express();

//Set up default mongoose connection
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//log any connection success / errors
db.on('connected',() => console.log("MongoDB connection successful"));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// set up graphql endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
// start node server at port: PORT
app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
