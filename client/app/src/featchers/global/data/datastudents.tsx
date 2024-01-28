import { gql } from "@apollo/client";

export const students = gql`
query GetStudentsDetails {
    
        findAllStudents{
          id
          name
          phone
          address
          email
          courses{name}
        }
      }

`;