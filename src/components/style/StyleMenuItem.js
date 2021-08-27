import React from "react";
import "./StyleMenuItem.css";

function StyleMenuItem({title, Icon }) {
  return (
    <div className="styleMenuItem">
      <button>
        <Icon />
      </button>
      <p>{title}</p>
    </div>
  );
}

export default StyleMenuItem;
