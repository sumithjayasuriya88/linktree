import React from "react";
import "./ProfileManageComponent.css";

function ProfileManageComponent({ title, subtext, buttontext }) {
  return (
    <div className="profileManageComponent">
      <div className="profileManageComponent__info">
        <h4>{title}</h4>
        <p>{subtext}</p>
      </div>
      <button>{buttontext}</button>
    </div>
  );
}

export default ProfileManageComponent;
