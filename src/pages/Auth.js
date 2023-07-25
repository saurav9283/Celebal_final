import { useNavigate } from "react-router-dom";
import "../pages/Auth.css";

function Auth() {
  const navigate = useNavigate();

  function handelClick() {
    navigate("WeatherBox/");
  }
  return (
    <>
      <div className="all">
        <div className="left">
          <p>Board.</p>
        </div>
        <div className="right-form">
          <div className="cointainer">
            <div className="sign">
              <h1>Sign In</h1>
              <p>Sigh in to your account</p>
            </div>
            <div className="form" onSubmit={handelClick}>
              <form>
                <p>Enter Email</p>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="xyz@gmail.com"
                />
                <p>Password</p>
                <input type="password" required id="password" />
                <a href="/" className="forgot">
                  Forgot password?
                </a>
                <button className="submit" type="submit">
                  Sign In
                </button>
              </form>
            </div>
            <p className="ifnotaccount">
              Don't have an account?<span>Register here</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
