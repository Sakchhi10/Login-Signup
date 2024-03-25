import React from 'react'
import './ForgotPassword.css'
import user_icon from '../Assets/person.png'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

    return ( 
        
        
        <div className = 'container'>
        <div className = 'header'>
        <div className = 'text' > Forgot Password </div> 
        <div className = 'underline' >
        </div> 
        </div> 
        <div className = 'inputs'>
        <div className = 'input' >
        <img src = { user_icon } alt = '' />
        <input type = 'text' placeholder = 'Username' />
        </div> 
        </div> 
        <div className = 'submit-container' >
        <div className = 'submit' > <Link to="/reset-password "> {/* Add Link here */}
          <div className="submit">Forgot Password</div>
        </Link></div>
        <div className = '' > 
        </div> 
        </div> 
        </div>

    )
}

export default ForgotPassword