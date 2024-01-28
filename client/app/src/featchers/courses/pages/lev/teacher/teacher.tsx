import React from "react";
import Image from "./header/Image";
import Title from "./header/Title";
import Description from "./body/Description";
import {  useNavigate } from "react-router-dom";
interface TeacherProps {
  data: {
    Course: {
      lecturer: string;
    };
  };
}
function Teacher1({ data }: TeacherProps) {
  const navigate = useNavigate();

  const handleViewCourse = (name:string) => {
    navigate(`/teacher/${name}`);
  };
  return (
    <div className="teacher-info"  onClick={() => handleViewCourse(data?.Course?.lecturer)}>
      <div className="teacher-details">
        <Image />
        <Title data={data}/>
        <Description/>
      </div>
    </div>
  );
}

export default Teacher1;
