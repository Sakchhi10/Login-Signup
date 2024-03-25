import React from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className="text ">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className='inputs'>
        <div className="input ">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder="Name"/>
        </div>
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgot-password">
        Already have an account? <span><Link to="/Login">Sign In</Link></span>
      </div>
      <div className="submit-container">
        <Link to="/Login"> {/* Add Link here */}
          <div className="submit">Sign Up</div>
        </Link>
        <div className=""></div>
      </div>
    </div>
  );
}

export default LoginSignup;