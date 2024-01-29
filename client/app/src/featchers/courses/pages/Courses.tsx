/* eslint-disable @typescript-eslint/no-explicit-any */
import { GET_COURSES_DETAILS } from "../../global/data/datacourses";
import "./Courses.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";

const StyledContainer = styled.div`
  padding: 32px;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0; // הוסף את צבע הרקע שתרצה כאן
  margin: 0 auto;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 88%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

const StyledCardMedia = styled.div<{ image: string }>`
  height: 180px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const StyledCardContent = styled.div`
  padding: 16px;
  flex-grow: 1;
`;

const StyledCardActions = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: darkblue;
    transform: translateY(-2px);
  }
`;
interface Course {
  name: string;
  __typename: string; // הוספתי את השדה __typename כי נראה שהוא חלק מהאובייקט שלך
}

interface Student {
  id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
  courses: Course[];
  __typename: string;
}

function Courses() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_COURSES_DETAILS);

  if (loading) console.log("טוען...");
  if (error) console.error("שגיאה:", error);
  if (data) console.log("נתוני הקורס:", data.Courses);
  const handleViewCourse = (id: string) => {
    navigate(`/course/${id}`);
  };
  const value = localStorage.getItem("teacherDetails");
  if (value) {
    const teacherDetailes = JSON.parse(value);
    console.log("data from local: " + teacherDetailes?.course);
  }
  const valueStudent = localStorage.getItem("studentDetails");
  if (valueStudent) {
    console.log("hidden student data from" + valueStudent);
  }
  let studentCourses = [];
  if (valueStudent) {
    const studentDetails = JSON.parse(valueStudent);
    studentCourses = studentDetails.courses.map(
      (course: Course) => course.name
    );
    console.log(studentCourses);
  }
  let studentCourseNames: string[] = [];
if (valueStudent) {
  const studentDetails = JSON.parse(valueStudent);
  studentCourseNames = studentDetails.courses.map((course: Course) => course.name);
}
console.log("arr"+studentCourseNames);

  return (
    <StyledContainer>
      <StyledGrid>
        {data?.Courses?.map((course: any) => (
          <StyledCard key={course.name}>
            <StyledCardMedia
              data-testid={`image-${course.id}`}
              image={course.imageURL}
            />
            <StyledCardContent>
              <h5
                data-testid={value ? `course-${course.id}` : ""}
                className={
                  value && JSON.parse(value).course === course.courseName
                    ? "your-course"
                    : ""
                }
              >
                {value && JSON.parse(value).course === course.courseName
                  ? "Your course: "
                  : ""}{" "}
                {course.courseName}
              </h5>
            </StyledCardContent>
            <StyledCardActions>
  
                <StyledButton
                  data-testid={`button-${course.name}`}
                  onClick={() => handleViewCourse(course.name)}
                >
                  View Course
                </StyledButton>
              
            </StyledCardActions>
          </StyledCard>
        ))}
      </StyledGrid>
    </StyledContainer>
  );
}

export default Courses;
