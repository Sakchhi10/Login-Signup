import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
// import ResetPassword from './ResetPassword';
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        
        <li className="nav-item"><Link to="/login">Login</Link></li>
        <li className="nav-item"><Link to="/forgot-password">Forgot Password</Link></li>
        <li className="nav-item"><Link to="/reset-password">Reset Password</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;