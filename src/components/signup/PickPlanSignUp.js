import React, { useState } from "react";
import PackageSelect from "./PackageSelect";
import {FaExternalLinkAlt} from 'react-icons/fa'
import "./PickPlanSignUp.css";
import { Link } from "react-router-dom";

function PickPlanSignUp({nextStep}) {

    const [toggleCheckBox, settoggleCheckBox] = useState(true);

    const toggleHandlerCheckBox = ()=>{
        console('ddddddddddddddddddddd');
        
    }

  return (
    <div className="pickPlanSignUp">
      <div className="signupPage__left">
     <Link to="" > <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" /></Link>
       
        <div className="signup__packageCard">
          <h1>Pick your plan</h1>
          <h4>You can always change later</h4>
          <div className="packageSelectConatiner">
            <PackageSelect packageName='FREE' packageaAount='0' toggleHandlerCheckBox={toggleHandlerCheckBox} packageSubText='Free forever' defautSelect={toggleCheckBox} activeCalss="packageSelect active" />
            <PackageSelect packageName='PRO' packageaAount='6' toggleHandlerCheckBox={toggleHandlerCheckBox}  packageSubText='USD per month' defautSelect={!toggleCheckBox} activeCalss="packageSelect"/>
          </div>
          <button onClick={nextStep}>Sign up for PRO $6</button>
          <a href="">Compare full plans <FaExternalLinkAlt/></a>
        </div>
       
      </div>

      <div className="signupPage__right">
        <img
          src={process.env.PUBLIC_URL + "/images/04-Payment-02-1920x1920.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default PickPlanSignUp;
