import { Checkbox, InputAdornment, TextField } from "@material-ui/core";

import React, { useState,useEffect } from "react";
import { FaCheckCircle ,FaTimesCircle} from "react-icons/fa";
import { Link } from "react-router-dom";
 
import "./UserAccountForm.css";

function UserAccountForm({nextStep,email}) {

    useEffect(() => {
        
    }, [])

    const [showValidEmail, setshowValidEmail] = useState(false);
   const [showValidUserName, setshowValidUserName] = useState(false);
   const [showValidPassword, setshowValidPassword] = useState(false);

   const [validEmail, setValidEmail] = useState(false);
   const [validUserName, setValidUserName] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
    
  function emailValidator(e){
    let emailValue = e.target.value;
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!pattern.test(emailValue)) {

        setValidEmail(false);
        setshowValidEmail(true);
      }else{
        setValidEmail(true);
        setshowValidEmail(true);
      }

      if(emailValue==''){
        setshowValidEmail(false);
      }
  }  

  return (
    <div className='userAccountForm'>
    
        
      <div className="signupPage__left">
        <Link to="/" ><img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" /></Link>
        <div className="signupPage__card">
          <h1>Create an account for free</h1>
          <p>Free forever. No payment needed.</p>
          
          <form action="" className="signupPage__form">
            <TextField label="Email" variant="filled" required type="email" onChange={emailValidator} 
            InputProps={{
                
                endAdornment: (                    
                  <InputAdornment position="end">
                      {showValidEmail?
                      (validEmail? <FaCheckCircle className='FaCheckCircle' />: <FaTimesCircle  className='FaTimesCircle' />):''}                   
                  </InputAdornment>
                ),

                className: validEmail&showValidEmail?"EmailTextField success":"EmailTextField error",
              }}/>

            <TextField
              label="Username"
              variant="filled"
              helperText="Some important text"
              error
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">linktree/</InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        {showValidUserName?
                       ( validUserName? <FaCheckCircle />: <FaTimesCircle />):''}
                     
                    </InputAdornment>
                  ),
                  className: validUserName&showValidUserName?"EmailTextField success":"EmailTextField error",
              }}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {showValidPassword?
                       ( validPassword? <FaCheckCircle />: <FaTimesCircle />):''}
                     
                    </InputAdornment>
                  ),
  

                className: "TextField",
              }}
            />

            <div className="form_termsWrapper">
              <Checkbox/>

              <p>
                By creating an account you are agreeing to our{" "}
                <a href="">Terms and Conditions</a> and{" "}
                <a href="">Privacy Policy</a>
              </p>
            </div>
            <button type="submit" onClick={nextStep}>Sign up with email</button>
          </form>
          <div className="alreadyaccount__linkwrap">
            <Link to="dd">Already have an account?</Link>
          </div>
        </div>
      </div>

      <div className="signupPage__right">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/Linktree-SignUp-Payment_July2021.png"
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default UserAccountForm;
