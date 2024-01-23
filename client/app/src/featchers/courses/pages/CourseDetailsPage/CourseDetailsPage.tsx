import "./MainCourse.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Statistic from "../graph/Graph";
import StudentsTable from "../table/Table";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import TitleDes from "../TitleDes/TitleDes";
// import Teacher from "./teacher";
import Paper from "../paper/Paper";

function CourseDetailsPage() {
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
        className={`fa fa-star ${i < rating ? "checked" : ""}`}
      ></span>
    );
  }
  const topics = data?.Course?.topicsCovered
    .map((topic: { topic: string }) => `✔   ${topic.topic}`)
    .join("\n");
  const courseInfo = `What will we learn in this course?\n\n${topics}`;

  return (
    <div style={{ backgroundColor: "#f0f0f0", width: "100%", height: "100%" }}>
      <div className="all">
        <div className="main">
          <div style={{ border: "2px solid purple" }}>
            <TitleDes data={data} stars={stars} />
            <div
              className="center"
              data-testid="content-div"
              style={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <StudentsTable />
              <Paper courseInfo={courseInfo} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          display: "flex",
          width: "auto",
          height: "100%",
          border: "2px solid pink",
        }}
      >
        <Statistic />
      </div>
    </div>
  );
}
export default CourseDetailsPage;
