 
import { Link } from 'react-router-dom'
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ title, Icon, to ,activeClass }) {
  return (
    <div className= {activeClass}  >
      <Link to={to} >
        <Icon />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default HeaderOption;
