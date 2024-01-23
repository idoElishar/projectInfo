import React from 'react'
interface TeacherProps {
    data: {
      Course: {
        lecturer: string;
      };
    };
  }
function Title({ data }: TeacherProps) {
  return (
    <div>
                <h2>Teacher: {data?.Course?.lecturer}</h2>
    </div>
  )
}

export default Title