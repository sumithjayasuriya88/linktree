import React from "react";
import "./CategoryTag.css";
import { FaTimesCircle } from "react-icons/fa";

function CategoryTag({ text,categoryCuontHanlder,classes ,selected}) {
  return (
    <div className={classes} onClick={categoryCuontHanlder} >
      <span>{text}</span>
        {selected? <FaTimesCircle className="FaTimesCircleTag" />:''}
     
    </div>
  );
}

export default CategoryTag;
