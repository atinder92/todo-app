import { gql } from "@apollo/client";
const currentUser = gql`
  query {
    currentUser {
      id
      name
      email
      todos {
        title
      }
    }
  }
`;
export default currentUser;
