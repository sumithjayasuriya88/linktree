import React from "react";
import "./StyleIconsBlock.css";
import { FaSort, FaTripadvisor, FaViber } from "react-icons/fa";
import StyleEditButtons from "./StyleEditButtons";

function StyleIconsBlock() {
  return (
    <div className="styleIconsBlock">
      <button className="styleIconsBlock__addicons">Add Icons</button>
      <div className="styleIconsBlock__iconContainer">
        <FaViber className='inner_icon'/>
        <FaTripadvisor className='inner_icon' />
      </div>
      <button className="styleIconsBlock__moveicons">
        <FaSort className="styleIconsBlock__moveiconsSort" />
        Move Icons
      </button>
      <StyleEditButtons />
    </div>
  );
}

export default StyleIconsBlock;
