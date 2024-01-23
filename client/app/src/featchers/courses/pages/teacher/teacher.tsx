import React from "react";
import Image from "./header/Image";
import Title from "./header/Title";
import Description from "./body/Description";
interface TeacherProps {
  data: {
    Course: {
      lecturer: string;
    };
  };
}
function Teacher({ data }: TeacherProps) {
  return (
    <div className="teacher-info">
      <div className="teacher-details">
        <Image />
        <Title data={data}/>
        <Description/>
      </div>
    </div>
  );
}

export default Teacher;
