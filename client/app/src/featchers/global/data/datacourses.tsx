import { gql } from "@apollo/client";

export const GET_COURSES_DETAILS = gql`
  query GetCoursesDetails {
    Courses {
      id
      courseName
      description
      lectures {
        title
      }
      exercises {
        title
      }
      topicsCovered {
        topic
      }
      lecturer
      imageURL
    }
  }
`;
