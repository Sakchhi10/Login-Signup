import React from 'react'
import './Login.css'
// import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import {Link} from "react-router-dom"

const LogIn = () => {

    return ( 
        
        <div className = 'container'>
            <div className = 'header' >
            <div className = 'text' > Sign In </div> 
            <div className = 'underline' >
        </div> 
        </div> 
        <div className = 'inputs' >
        {/* <div className = 'input' >
        <img src = { user_icon } alt = "" />
        <input type = 'text' placeholder = "Name" />
        </div>  */}
        <div className = 'input' >
        <img src = { email_icon } alt = "" />
        <input type = 'text' placeholder = 'Email Id' />
        </div> 
        <div className = 'input' >
        <img src = { password_icon } alt = "" />
        <input type = 'text' placeholder = 'Password' />
        </div> 
        </div> 
        <div className = 'forgot-password' > Forgot Password ? <span> <Link to="/forgot-password">Click Here!</Link></span> </div>
        <div className = 'submit-container'>
            <div className = 'submit' > <Link to="/"> {/* Add Link here */}
          <div className="submit">Sign In</div>
        </Link> </div> 
            <div className = '' > </div> 
        </div> 
        <div className = 'forgot-password' > Don't have an account? <span><Link to="/">Sign Up</Link></span></div> 
        </div>

    )
}

export default LogIn