import { gql } from "@apollo/client";
const CREATE_TODO = gql `
    mutation CreateTodo($title: String!, $description: String!, $createdBy: ID!, $dueDate: String!) {
        createTodo(title: $title, description: $description, createdBy: $createdBy, dueDate: $dueDate) {
            title
        }
    }
`;
export default CREATE_TODO;