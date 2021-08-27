import React from "react";
import "./SignUpSuccess.css";
import {FaArrowRight} from 'react-icons/fa'
import { Link } from "react-router-dom";

function SignUpSuccess() {
  return (
    <div className="signUpSuccess">
      <div className="signupPage__left">
        <Link to="/">
        <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" />
        </Link>
      
        <div className="signUpSuccess__card">
            <h1>Thank you for signing up</h1>
            <p>To verify your account, click on the link sent to your inbox (sumith.scd@gmail.com)</p>
            <button>CONTINUE TO MY LINKTREE </button>
        </div>
      </div>

      <div className="signupPage__right">
        <img
          src={
            process.env.PUBLIC_URL + "/images/Confirmation_1920x1920-4-min.png"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default SignUpSuccess;
