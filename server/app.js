const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const port = 3000;
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
})