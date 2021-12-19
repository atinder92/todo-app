import { gql } from "@apollo/client";
const EDIT_TODO = gql `
    mutation UpdateTodo($id:ID!, $title: String!, $description: String!, $dueDate: String!) {
        updateTodo(id: $id, title: $title, description: $description, dueDate: $dueDate) {
            title
        }
    }
`;
export default EDIT_TODO;