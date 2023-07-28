import React from 'react'
import { Link , useNavigate } from 'react-router-dom'


import '../Auth/Register.css';

export default function SignUpPage() {

  const navigate = useNavigate();

  function handelRegister() {
    navigate("/");
    navigate("/WeatherBox")
  }

    return (
        <div className='Register'>
        <div className='form1'>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input className="username" type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input className="username" type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input className="username" type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button className="sub_btn" type="submit" onClick={handelRegister}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/" className='back'>Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )

}