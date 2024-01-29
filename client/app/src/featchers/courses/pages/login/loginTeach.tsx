/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

export const TEACHER_LOGIN_MUTATION = gql`
  mutation TeacherLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      teacher {
        id
        name
        email
        course
        address
        phone
        images
      }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [login] = useMutation(TEACHER_LOGIN_MUTATION, {
    onCompleted: (data) => {
      console.log("Response data:", data);
      if (data.login && data.login.access_token) {
        console.log("מורה נכנס");
  
        localStorage.setItem("accessToken", data.login.access_token);
        localStorage.setItem("teacherDetails", JSON.stringify(data.login.teacher));
        printLocalStorage()

        navigate(`/`);
      }
    },
    onError: (error) => {
      console.error("Login error:", error);
      setErrorMessage( error.message);
    },
  });
  
  const handleStudentLogin = () => {
    navigate("/loginstudent");
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleTeacherLogin = () => {
    console.log("Attempting teacher login with:", { email, password });
    login({
      variables: {
        email,
        password,
      },
    });
  };
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
  


  return (
    <div className="login-container">
      <h2>Login Teacher</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="input-container">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="button-container">
        <button className="teacher-button" onClick={handleTeacherLogin}>
         Enter Teacher
        </button>
        <button className="student-button" onClick={handleStudentLogin}>
        Go to the login page as a student
        </button>
      </div>
    </div>
  );
};

export default Login;
