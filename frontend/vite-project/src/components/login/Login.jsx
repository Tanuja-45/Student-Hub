import React, { useState, useContext, useEffect } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { userLoginContext } from "../../context/usercontext"; 
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function LoginPage() {
  const { loginUser, userLoginStatus, err } = useContext(userLoginContext); // Destructure correctly from context
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let { register, handleSubmit, formState: { errors } } = useForm();

  function onUserLogin() {
    loginUser({ email, password });
    console.log(userLoginStatus);
  }

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate("/dashboard");
    }
  }, [userLoginStatus]);

  return (
    <div className="login-container">
      <h1>Welcome to</h1>
      <img
        src="https://images-platform.99static.com/0AbsNnQlTwX4EZVub25_1aC3K88=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/96/96134/attachment_96134165"
        alt="Student Hub Logo"
        className="logo"
      />
     
      <form className="mt-4" onSubmit={handleSubmit(onUserLogin)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        <p className='mt-3'>Doesn't have Account ?   
          <Link to='/register' style={{textDecoration: 'underline', color: '#007bff'}}> Register</Link>
        </p>
      </form>

      {err && <p style={{ color: 'red' }}>{err}</p>}
    </div>
  );
}

export default LoginPage;
