import React from 'react'
import './ResetPassword.css'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'

const ResetPassword = () => {

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Reset Password</div>
                <div className='underline'>
                </div>
            </div>
            <div className='inputs'>
            <div className='input'>
                    <img src = {user_icon} alt=''/>
                    <input type = 'text' placeholder='Enter Username'/>
                </div>
                <div className='submit1'>Get OTP</div>
                <div className='input'>
                    <img src = {password_icon} alt=''/>
                    <input type = 'text' placeholder='Enter OTP'/>
                </div>
                <div className='input'>
                    <img src = {password_icon} alt=''/>
                    <input type = 'text' placeholder='New Password'/>
                </div>
                <div className='input'>
                        <img src = {password_icon} alt=""/>
                        <input type = 'text' placeholder='Confirm Password'/>
                </div>
            </div>
            <div className='submit-container'>
                    <div className='submit'>Reset Password</div>
                    <div className=''></div>
                </div>
            </div>
    )
}

export default ResetPassword