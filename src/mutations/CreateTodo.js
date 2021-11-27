import { gql } from "@apollo/client";
const CREATE_TODO = gql `
    mutation CreateTodo($title: String!, $description: String!, $createdBy: ID!) {
        createTodo(title: $title, description: $description, createdBy: $createdBy) {
            title
        }
    }
`;
export default CREATE_TODO;