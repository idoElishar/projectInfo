import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "../../courses/pages/Courses";
// import Course from "../../courses/pages/Course";
import Header from "../layout/Header";
import Teacher from "../../users/pages/teachers/Teacher";
import CustomizedTables from "../../users/pages/students/StudentsInCourse";
import Student from "../../users/pages/students/Student";
  import MainCourse from "../../courses/pages/lev/CourseDetailsPage/CourseDetailsPage";
import Footer from "../layout/Footer";
import Login from "../../courses/pages/login/loginTeach";
import LoginStudent from "../../courses/pages/login/loginStudent";

function MyRouter(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course/:id" element={<MainCourse />} />
        <Route path="/teacher/:name" element={<Teacher />} />
        <Route path="/students/:coursename" element={<CustomizedTables />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/loginteacher" element={<Login />} />
        <Route path="/loginstudent" element={<LoginStudent />} />


      </Routes>
      <Footer />
    </Router>
  );
}
export default MyRouter;
