import {useState} from "react";
import { useNavigate } from "react-router-dom";
import loginImg from '../img/loginImg.png'
import RegisterImg from '../img/signUpImg.png'
import './Auth.css';
import Login from "./Login";
import SignUpPage from "./Register";
// import { Navigate } from "react-router-dom";

function Auth() {
  const [isLogin,setLogin]=useState(true)
  const navigate = useNavigate();

  // function handelSubmit() {
  //   navigate("WeatherBox/");
  // }
  // function handelRegister(){
  //   navigate("Register/");
  // }
  return (
    <div className='auth'>
        <div className="left">
        <img src={ isLogin? loginImg:RegisterImg } alt="login" />
        </div>
        <div className="right">
          {isLogin?<Login setlogin={setLogin}/>:<SignUpPage setlogin={setLogin}/>}
        </div>
    </div>
  );
}

export default Auth;
