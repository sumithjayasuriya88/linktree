import React from "react";
import { InputAdornment, TextField, Checkbox } from "@material-ui/core";
import { FaCheckCircle } from "react-icons/fa";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserAccountForm from "../components/signup/UserAccountForm";
import TellUsName from "../components/signup/TellUsName";
import PickPlanSignUp from "../components/signup/PickPlanSignUp";
import SignUpSuccess from "../components/signup/SignUpSuccess";

function SignupPage() {
  const [prefix, setPrefix] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const categoryList = [
    'music',
    'comedy',
    'brand',
    'creative',
    'influencer',
    'government',
    'actor/celebrity',
    'gaming/esports',
    'fashion/beauty',
    'food/hospitality',
    'podcast/radio',
    'education',
    'sports',
    "publication/digital media",
    'tv/film',
    'writer',
    'community org/non-profit',
    'agency',
    'eCommerce',
    'business professional',
    'internet/technology',
    'arts/entertainment',
    'health/wellness',
    'travel/tourism',
    'independent/small business',
    'personal',
    'politics',
    'model',
    'other'
  ]
  //Handle next step
  const nextStep = () => {
    let stepval = step + 1;
    setStep(stepval);
  };

  const test = () => {
    setPrefix("linktree.com/");
  };

  const testblu = () => {
    setPrefix("");
  };

  const returnPrefix = () => {
    return;
  };

  switch (step) {
    case 1:
      return (
        <div className="signupPage">          
          <UserAccountForm nextStep={nextStep} email={email}/>
        </div>
      )
    case 2:
      return (
        <div>          
           <TellUsName nextStep={nextStep} categoryList={categoryList} />
        </div>
      )
    case 3:
      return (
        <div>
          <PickPlanSignUp  nextStep={nextStep}/>
        </div>
      )
      case 4:
      return (
        <div>
          <SignUpSuccess nextStep={nextStep} />
        </div>
      )
  }
}

export default SignupPage;
