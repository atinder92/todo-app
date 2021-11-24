import {gql} from "@apollo/client";
const Login = gql `
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            userId
            token
        }
    }
`;
export default Login;