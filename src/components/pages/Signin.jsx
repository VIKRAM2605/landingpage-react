import React from 'react'
import "../../styles/Signin.css"
import { useNavigate } from 'react-router-dom'
export default function Signin() {
  const navigate=useNavigate();
  return (
    <div className='signin-container'>
      <h1 className='Sign-in'>Sign In</h1>
      <form>
        <div className="user-name">
        <label>Username&nbsp;:&nbsp;</label>
        <input type='text' name='username' placeholder='Enter your username' required className='Username-input'/></div>
        <br/>
        <div className="user-password">
        <label>Password&nbsp;&nbsp;:&nbsp;</label>
        <input type='password' name='password' placeholder='Enter your password' required className='Password-input'/></div>
        <br />
        <button className='submit-button' onClick={()=>{navigate('/')}}>Submit</button>
      </form>
    </div>
  )
}
