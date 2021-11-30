import { gql } from "@apollo/client";
const currentUser = gql`
  query {
    currentUser {
      id
      name
      email
      todos {
        title
        description
        dueDate
        createdDate
        _id
      }
    }
  }
`;
export default currentUser;
