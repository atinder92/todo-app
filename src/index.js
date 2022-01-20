import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  concat
} from "@apollo/client";
import { HashRouter as Router } from "react-router-dom";
import { getAuthToken } from "./utils";
import "./index.css";
import App from "./App";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getAuthToken();
  operation.setContext(({ headers = {} }) => {
    if(token) {
      headers['authorization'] = token;
    }
    return {
      headers: {
        ...headers
      },
    };
  });
  return forward(operation);
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
  document.getElementById("root")
);
