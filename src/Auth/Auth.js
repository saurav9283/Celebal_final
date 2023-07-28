import React from "react";
import { useNavigate } from "react-router-dom";
import '../Auth/Auth.css';
// import { Navigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  function handelSubmit() {
    navigate("WeatherBox/");
  }
  function handelRegister(){
    navigate("Register/");
  }
  return (
    <>
      <div className="right-form">
          <div className="cointainer">
            <div className="sign">
              <h1>Sign In</h1>
              <p>Sigh in to your account</p>
            </div>
            <div className="form" onSubmit={handelSubmit}>
              <form>
                <p>Enter Email</p>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="xyz@gmail.com"
                />
                <p>Password</p>
                <input type="password" required id="password" placeholder="Password"/>
                <a href="/" className="forgot">
                  Forgot password?
                </a>
                <button className="submit" type="submit">
                  Sign In
                </button>
                <button className="skipLogin" onClick={handelSubmit}>Skip - LOGIN</button>
              </form>
            </div>
            <p className="ifnotaccount" onClick={handelRegister}>
              Don't have an account?<span >Register here 👈</span>
            </p>
          </div>
        </div>
        <div className='submit-tag'>
              <p>Project Created By: Saurav kumar</p>
              <a href='https://github.com/saurav9283' target='_blank' rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" width="32" height="32" alt="Github"></img>
              </a>
              <a href='https://www.linkedin.com/in/saurav9283/' target='_blank' rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" width="32" height="32" alt="LinkedIn"></img>
              </a>
            </div>
    </>
  );
}

export default Auth;
