import React from "react";
import "./HomeMobilephone.css";

function HomeMobilephone() {
  return (
    <div className="homeMobilephone">
      <div className="homeMobilephone__outer">
        <div className="homeMobilephone__profile">
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
        <div className="mobileLinkContainer">
          <div className="homeMobilephone__linkplace" />
          <div className="homeMobilephone__linkplace" />
          <div className="homeMobilephone__linkplace" />
          <div className="homeMobilephone__linkplace" />
          <div className="homeMobilephone__linkplace" />
        </div>
        <div className="homeMobilephone__socialconatiner">
          <img src={process.env.PUBLIC_URL + "/images/instagram.svg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/spotify.svg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/snapchat.svg"} alt="" />
        </div>
      </div>
      <div className="mobilephone_dotline" />
      <div className="homeMobilephone__linkconatiner">
        <img className='logo' src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" />
        <p>hype.bio/</p>
        <input type="text" name="" id="" placeholder='yournamehere'/>
        <img id='arrow' src={process.env.PUBLIC_URL + "/images/right-arrow2.svg"} alt="arrow" />
      </div>
    </div>
  );
}

export default HomeMobilephone;
