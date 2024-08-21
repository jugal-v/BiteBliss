/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

  const [currentState, setCurrentState] = useState("Log In")
  return (
    <div className='login'> 
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currentState === "Log In"?<></>:<input type="text" placeholder='Your Name' required/>}
          <input type = "email" placeholder='Your Email' required/>
          <input type = "password" placeholder='Password' required/>
        </div>
        <button>{currentState==="Sign Up"?"Create Account":"Log In"}</button>
        <div className="login-condition">
          <input type="checkbox" name="" id="" required/>
          <p>By continuing, I agree to terms and conditions.</p>
        </div>
        {currentState==="Log In"?<p>Create a New Account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>:
        <p>Already Have an Account <span onClick={()=>setCurrentState("Log In")}>Login Here</span></p>}
        
        
        
      </form>
    </div>
  )
}

export default Login
