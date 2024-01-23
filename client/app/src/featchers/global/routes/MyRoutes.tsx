import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "../../courses/pages/Courses";
import Course from "../../courses/pages/Course";
import Teacher from "../../users/pages/teachers/Teacher";
import CustomizedTables from "../../users/pages/students/StudentsInCourse";
import Student from "../../users/pages/students/Student";
import Header from "../layout/Header";
import MainCourse from "../../courses/pages/CourseDetailsPage/CourseDetailsPage";
// import Footer from "../layout/Footer";
function MyRouter(): JSX.Element {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course/:id" element={<MainCourse />} />

        {/* <Route path="/course/:id" element={<Course />} /> */}
        <Route path="/teacher/:name" element={<Teacher />} />
        <Route path="/students/:coursename" element={<CustomizedTables />} />
        <Route path="/student/:id" element={<Student />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
export default MyRouter;
