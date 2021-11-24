import {gql} from "@apollo/client";
const Signup = gql `
    mutation Signup($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
           userId
           token
        }
    }
`;
export default Signup;