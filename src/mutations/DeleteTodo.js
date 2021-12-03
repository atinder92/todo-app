import { gql } from "@apollo/client";
const DELETE_TODO = gql `
    mutation DeleteTodo($id: ID!) {
        deleteTodo(id: $id) {
            id
        }
    }
`;
export default DELETE_TODO;