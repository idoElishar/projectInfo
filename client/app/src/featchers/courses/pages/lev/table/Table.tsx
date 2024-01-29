/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { students } from "../../../../global/data/datastudents";
import { useQuery } from "@apollo/client";

const Table = styled.table`
  border-collapse: collapse;
  font-size: 0.5em;
  font-family: "Alegreya SC", sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 15%;
  height: 20%;
  margin-top: 4rem;
`;

const Thead = styled.thead`
  background-color: #009879;
  color: white;
  text-align: center;
  font-family: "Alegreya SC", sans-serif;
`;

const Th = styled.th`
  padding: 3% 15%;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

const Td = styled.td`
  padding: 4% 15%;
  text-align: center;
`;
interface CourseItem {
  name: string;
}

interface Student {
  _id: {
    $oid: string;
  };
  name: string;
  phone: string;
  address: string;
  email: string;
  courses: CourseItem[];
  password: string;
}

const StudentsTable = ({ course }: { course: any }) => {
  console.log("course"+course);
  
  console.log("מריץ שאילתה...");
  const { loading, error, data } = useQuery<{ findAllStudents: Student[] }>(students);

  if (loading) {
    console.log("טוען...");
    return <p>טוען...</p>;
  }
  if (error) {
    console.error("שגיאה:", error);
    return <p>שגיאה</p>;
  }

  console.log("נתונים שהתקבלו:", data);

  const filteredStudentNames = data?.findAllStudents
    .filter((student: Student) =>
      student.courses.some((courseItem: CourseItem) => courseItem.name.includes(course))
    )
    .map((student: Student) => student.name);
    console.log(filteredStudentNames);
    console.log("names"+filteredStudentNames);
    

  return (
    <Table>
      <Thead>
        <tr>
          <Th>Students in course {course}</Th>
        </tr>
      </Thead>
      <Tbody>
        {filteredStudentNames &&
          filteredStudentNames.map((name: string, index: number) => (
            <Tr key={index}>
              <Td>{name}</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default StudentsTable;