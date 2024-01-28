/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleTeacherLogin = () => {
    console.log('מורה נכנס');
  };

  const handleStudentLogin = () => {
    console.log('תלמיד נכנס');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="button-container">
        <button className="teacher-button" onClick={handleTeacherLogin}>כניסה כמורה</button>
        <button className="student-button" onClick={handleStudentLogin}>כניסה כתלמיד</button>
      </div>
    </div>
  );
};

export default Login;
