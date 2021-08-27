import { TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="loginPage">
      <div className="loginPage__head">
        <Link to='/'>
        <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" />
        </Link>
    
      </div>
      <div className="loginPage__card">
        <h1>Sign in to your Linktree account</h1>
        <form action="">
          <TextField label="User Name" variant="filled" required type="text" />
          <TextField label="Password" variant="filled" required type="password" />
          <button>Sign in</button>
          <Link>Forgot password?
          </Link>
        </form>
    <p>Don't have an account? <a href="">Create one</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
