/* eslint-disable @typescript-eslint/no-explicit-any */
import { GET_COURSES_DETAILS } from "../../../global/data/datacourses";
import "./Courses.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";

const StyledContainer = styled.div`
  padding: 2%;
  width: 97%;
  height: 100%;
  background-color: #f0f0f0; 
  margin: auto auto;
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
    transform: translateY(-5px); 
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 2.9rem;
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
const StyledParagraph = styled.p`
  color: #ff6347; 
  font-size: 16px; 
  text-align: center; 
  padding: 10px; 
  border: 1px solid #ff6347; 
  border-radius: 8px; 
  background-color: #fff0f0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
`;
const StyledTitle = styled.h1`
  font-size: 3rem; // גודל פונט גדול יותר
  color: #fff; // צבע פונט בהיר
  text-align: center;
  background: linear-gradient(135deg, #1abc9c, #16a085); // גרדיאנט צבעים
  padding: 30px; // רווח גדול יותר
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // צל יותר מתוחכם
  margin-bottom: 3rem;
  margin-right: 2rem;

  font-family: 'Arial', sans-serif; // שינוי גופן
  letter-spacing: 1px; // מרווח בין האותיות
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); // צל טקסט
  transition: transform 0.3s ease-in-out; // אנימציה
  &:hover {
    transform: scale(1.05); // אפקט הגדלה בעת העברת העכבר
  }
`;

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

  let studentCourses: never[] = [];
  if (valueStudent) {
    const studentDetails = JSON.parse(valueStudent);
    studentCourses = studentDetails.courses.map(
      (course: any) => course.name
    );
    console.log(studentCourses);
  }

  let studentCourseNames: string[] = [];
  if (valueStudent) {
    const studentDetails = JSON.parse(valueStudent);
    studentCourseNames = studentDetails.courses.map((course: any) => course.name);
  }

  const commonCourses = data?.Courses.filter((course: any) =>
    studentCourseNames.some(studentCourseName =>
      course.courseName.includes(studentCourseName) || studentCourseName.includes(course.courseName)
    )
  ).map((course: any) => course.courseName);

  console.log("מערך משותף:", commonCourses);

  return (
    <StyledContainer>
            <StyledTitle>Welcome to our courses</StyledTitle>

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
              {value && (
                <StyledButton
                  data-testid={`button-${course.name}`}
                  onClick={() => handleViewCourse(course.id)}
                >
                  View Course
                </StyledButton>
              )}

              {

                commonCourses.includes(course.courseName) ? (
                  <StyledButton
                    data-testid={`button-${course.name}`}
                    onClick={() => handleViewCourse(course.id)}
                  >
                    View Course
                  </StyledButton>
                ) : 
             (  !value&& (
                  <StyledParagraph>You are not enrolled in this course</StyledParagraph>
                )
              )}

            </StyledCardActions>
          </StyledCard>
        ))}
      </StyledGrid>
    </StyledContainer>
  );
}

export default Courses;
