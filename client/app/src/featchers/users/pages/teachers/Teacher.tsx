/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styled from "styled-components";



const TeacherBox = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeacherPaper = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 2rem;
  background-color: #eceff1;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
`;

const TeacherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    font-size: ${({ variant }) => {
      switch (variant) {
        case 'h4':
          return '1.5rem';
        default:
          return '1rem';
      }
    }};
  `;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: #0056b3;
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
