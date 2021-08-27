import { InputAdornment, TextField } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import React , {useState} from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryTag from "./CategoryTag";
import "./TellUsName.css";

function TellUsName({ nextStep, categoryList,email }) {

   const [categoryCount, setCategoryCount] = useState(0) ;

   function updateCategoryCount(){
       var catVal = categoryCount+1;
       setCategoryCount(catVal);
   }

  return (
    <div className="tellUsName">
      <div className="signupPage__left">
      <Link to="/" ><img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" /></Link>
        <div className="signupPage__leftTellNameCard">
          <h1>We just need to confirm few things</h1>
          <div className="tellus__namerwapper">
            <h4>Tell us your full name</h4>
            {email}
            <TextField
              label="Full Name"
              variant="filled"
              required
              type="text"
            />
          </div>
          <div className="tellus__categorywarepper">
            <div>
              <h4>Tell us about yourself</h4>
              <p>Select upto 3 categories that best describes your linktree</p>
            </div>
            <div>
              <p>
                We'll customize your Linktree experience based on what you
                select
              </p>
              <p>{categoryCount} of 3</p>
            </div>
            <div className="tellus__categoryConatiner">
              {categoryList.map((cat) => (
                <CategoryTag text={cat}  categoryCuontHanlder={updateCategoryCount} classes="categoryTag disabled" selected={true}/>
              ))}
            </div>
          </div>
          <button onClick={nextStep}>continue</button>
          
        </div>
      </div>

      <div className="signupPage__right">
        <img
          src={process.env.PUBLIC_URL + "/images/02-Vertical-1920x1920.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default TellUsName;
