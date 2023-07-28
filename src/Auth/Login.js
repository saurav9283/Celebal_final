import  { useState } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './Login.css'
import { useNavigate } from "react-router-dom";
function Login({setlogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    function handelRegister() {
        navigate("/");
        navigate("/WeatherBox");
      }
  return (
    <div className="login">
      <div className="heading">
        <h1>
          Login into <br />
          your account
        </h1>
      </div>
      <div className="inputBox">
        <form onSubmit={handelRegister}>
          <div className="email myInput">
            <MailOutlineIcon className="icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Your Email Address"
              required
            />
          </div>
          <div className="password myInput">
            <LockOpenIcon className="icon" />
            <input
              type="password"
              placeholder=" Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mybtns">
            <button type="submit">Login</button>
            <button type="submit" onClick={handelRegister}>Skip Login</button>
          </div>
        </form>
      </div>
      <div className="link">
        <p>
          Don't have Account ?
          <span onClick={() => setlogin(false)}> Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
