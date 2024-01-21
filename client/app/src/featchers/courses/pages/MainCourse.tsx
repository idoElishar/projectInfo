import "./MainCourse.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Statistic from "./Graph";
import StudentsTable from "./Table";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

function MainCourse() {
  const { id } = useParams();
  console.log(id);

  const GET_COURSE_DETAILS = gql`
    query getCourseDetails($id: String!) {
      Course(id: $id) {
        id
        rating
        description
        courseName
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

  const { loading, error, data } = useQuery(GET_COURSE_DETAILS, {
    variables: { id: id },
  });

  if (loading) console.log("טוען...");
  if (error) console.error("שגיאה:", error);
  if (data) console.log("נתוני הקורס:", data);

  const rating = data?.Course?.rating;
  console.log(rating);

  const stars = [];
  for (let i = 0; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`fa fa-star ${i <= rating ? "checked" : ""}`}
      ></span>
    );
  }
  const topics = data?.Course?.topicsCovered
    .map((topic: { topic: string }) => `✔ ${topic.topic}`)
    .join("\n");
  const courseInfo = `What will we learn in this course?\n\n${topics}`;

  return (
    <div>
      <div className="all">
       
        <div className="main">
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
            <div className="center" style={{ border: "2px solid black" }}>
              <div className="paper" style={{ border: "2px solid blue" }}>
                <div
                  className="paper-content"
                  style={{ border: "2px solid pink" }}
                >
                  <textarea value={courseInfo} readOnly></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexGrow: 15,
            border: "2px solid red",
            //   justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <div className="teacher-info">
            <div className="teacher-details">
              <img
                src="https://oklahoma-council.transforms.svdcdn.com/production/assets/img/Teacher-in-front-of-chalkboard.jpeg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&crop=focalpoint&fp-x=0.3059&fp-y=0.2246&dm=1644340079&s=3020830ce187ed5578c03928dde0156b"
                alt="Teacher's Image"
                className="teacher-image"
              />
              <h2>Teacher: {data?.Course?.lecturer}</h2>
              <br />
              <p>Ph.D. in Computer Science</p>
              <p>10 years teaching experience</p>
            </div>
          </div>
          <div>
            <div className="table">
              <StudentsTable />
            </div>
          </div>
        </div>
      </div>
      
      <Statistic />
    </div>
  );
}
export default MainCourse;
