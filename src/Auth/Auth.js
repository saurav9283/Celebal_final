import React from "react";
import { useNavigate } from "react-router-dom";
import '../Auth/Auth.css';
// import { Navigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  function handelSubmit() {
    navigate("WeatherBox/");
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
            <p className="ifnotaccount">
              Don't have an account?<span>Register here</span>
            </p>
          </div>
        </div>
    </>
  );
}

export default Auth;
