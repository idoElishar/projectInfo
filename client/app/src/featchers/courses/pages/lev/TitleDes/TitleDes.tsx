import React from "react";
import Teacher from "../../teacher/teacher";

interface TitleDesProps {
  data: {
    Course: {
      courseName: string;
      description: string;
      lecturer: string;
    };
  };
  stars: JSX.Element[];
}

function TitleDes({ data, stars }: TitleDesProps) {
  console.log(stars);

  return (
    <div
      style={{
        border: "2px solid #ffcdd2",
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <Teacher data={data}   />
      <div className="title">
        <div
          style={{
            border: "2px solid orange",
            display: "flex",
            overflow: "visible",
          }}
        >
          <h2>{data?.Course?.courseName} Course</h2>
        </div>
        <div className="stars" style={{ border: "2px solid orange" }}>
          {stars}
        </div>
        <div className="text" style={{ border: "2px solid green" }}>
          {data?.Course?.description}
        </div>
      </div>
    </div>
  );
}

export default TitleDes;
