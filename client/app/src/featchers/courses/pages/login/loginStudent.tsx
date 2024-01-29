import React, { useState } from "react";
import "./Login.css";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export const STUDENT_LOGIN_MUTATION = gql`
  mutation StudentLogin($email: String!, $password: String!) {
    loginStudent(loginInput: { email: $email, password: $password }) {
      access_token
      student {
        id
        name
        phone
        address
        email
        courses {
          name
        }
      }
    }
  }
`;

const LoginStudent = () => {
  const [error, setError] = useState(""); 

  const navigate = useNavigate();
  const printLocalStorage = () => {
    console.log('Local Storage Content:');
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if(key){
      const value = localStorage.getItem(key);
      
      console.log(`${key}: ${value}`);
      }
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentLogin] = useMutation(STUDENT_LOGIN_MUTATION);

  const handleStudentLogin = async () => {
    try {
      const { data } = await studentLogin({
        variables: {
          email,
          password
        }
      });
      console.log("Student login data:", data);
      localStorage.setItem("accessToken", JSON.stringify(data.loginStudent.access_token));
      localStorage.setItem("studentDetails", JSON.stringify(data.loginStudent.student));
      printLocalStorage()
      navigate(`/`);
    } catch (error) {
      setError("Login failed. Please check your email and password. "+error); // שמירת השגיאה במשתנה סטאטי
      console.error("Student login error:", error);
    }
  };
  const handleTeacherLogin = () => {
    navigate("/loginteacher");
  };
  return (
    <div className="login-container">
      <h2>Login Student</h2>
      {error && <div className="error-message">{error}</div>} 
      <div className="input-container">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button className="student-button" onClick={handleStudentLogin}>
          login student
        </button>
        <button className="teacher-button" onClick={handleTeacherLogin}>
        Go to the login page as a teacher
        </button>
      </div>
    </div>
  );
};

export default LoginStudent;
