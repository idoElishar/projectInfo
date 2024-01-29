/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
 import "./teacher.css";


 const TeacherBox = styled.div`
 margin-top: 5rem;
 margin-bottom: 5rem;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #F4F7FC;
 padding: 2rem;
 border-radius: 8px;
//  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//  border:2px solid red;
 width:100%;
 height:100%;
`;

const TeacherPaper = styled.div`
 max-width: 100%;
 width: 70%;
 padding: 2rem;
 background-color: #eceff1;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
 border-radius: 12px;
//  border:2px solid blue;

`;

const TeacherCard = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
//  border:2px solid orange;

 @media (min-width: 768px) {
   flex-direction: row;
 }
`;

const TeacherCardContent = styled.div`
 flex: 1;
 min-width: 300px;
`;

const TeacherCardMedia = styled.img`
 width: 100%;
 height: auto;
 border-radius: 8px;
 margin: 3rem;
//  border:2px solid yellow;

 @media (min-width: 768px) {
   width: 300px;
   height: 300px;
 }
`;
interface TypographyProps {
  variant?: 'h4' | 'body1' | 'body2';
}

const Typography = styled.p<TypographyProps>`
  margin: 0.5rem 0;
  color: #646464;
  ${({ variant }) => {
    switch (variant) {
      case 'h4':
        return css`
          font-size: 1.75rem;
        `;
      case 'body1':
        return css`
          font-size: 1.25rem;
        `;
      case 'body2':
        return css`
          font-size: 1rem;
        `;
      default:
        return css`
          font-size: 1rem;
        `;
    }
  }};
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const Button = styled.a`
 display: inline-block;
 padding: 0.75rem 1.5rem;
 margin-top: 2rem;
 background-color: #007bff;
 color: white;
 text-decoration: none;
 border-radius: 5px;
 text-align: center;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
 transition: all 0.3s ease;
 &:hover {
   background-color: #0056b3;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   transform: translateY(-2px);
 }
`;
const PageTitle = styled.h1`
  text-align: center;
  color: #007bff;
  font-size: 3rem; // גודל גדול יותר
  margin-bottom: 2rem;
  font-family: 'Arial', sans-serif; // שינוי הגופן
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); // הוספת צל
  border-bottom: 2px solid #007bff; // קו תחתון
  animation: fadeIn 2s; // אנימציה
  // border:2px solid orange;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

function Teacher() {
  const { name } = useParams();
  const GET_TEACHER_BY_NAME = gql`
    query GetTeacherByName($name: String!) {
      findTeacherByName(name: $name) {
        id
        name
        email
        phone
        address
        course
        images
      }
    }
  `;
  console.log(name);
  const [teacher, setTeacher] = useState<any>(null);

  const { loading, error, data } = useQuery(GET_TEACHER_BY_NAME, {
    variables: { name: name },
    onCompleted: (data: any) => {
        setTeacher(data.findTeacherByName[0]); 
    },
  });

  useEffect(() => {
    if (data && data.findTeacherByName) {
      setTeacher(data.findTeacherByName);
    }
  }, [data]);
  console.log(teacher);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <TeacherBox>

      <TeacherPaper>
        <TeacherCard>

          <TeacherCardMedia
            src={teacher?.images}
            alt={teacher?.name}
          />
          <TeacherCardContent>
          <PageTitle>Teacher's Profile</PageTitle> 

            <Typography variant="h4">
              {teacher?.name}
            </Typography>
            <Typography>
              Course: {teacher?.course}
            </Typography>
            <Typography>
              Phone: {teacher?.phone}
            </Typography>
            <Typography>
              Address: {teacher?.address}
            </Typography>
            <Typography>
              Email: {teacher?.email}
            </Typography>
            <Button href={`mailto:${teacher?.email}`}>
              Send Mail
            </Button>
          </TeacherCardContent>
        </TeacherCard>
      </TeacherPaper>
    </TeacherBox>
  );
}

export default Teacher;
