import { Checkbox } from "@material-ui/core";
import React from "react";
import "./PackageSelect.css";
import {FaAngleDown} from 'react-icons/fa'

function PackageSelect({packageName,packageSubText,packageaAount,defautSelect,activeCalss}) {
  return (

    
    <div className={activeCalss}>
      <div className="packageSelect__header">
        <div>
          <h2>
            {packageName} <span>${packageaAount}</span>
          </h2>
          <p>{packageSubText}</p>
        </div>
        <div className="checkbox_conatin">
          <Checkbox
             defaultChecked={defautSelect}           
            inputProps={{ "aria-label": "secondary checkbox" }}
           
          />
        </div>
      </div>
      <div className="packageSelect__body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod
          aperiam illu
        </p>
      </div>
      <div className="packageSelect__footer">
        <p>Show key Features</p>
        <FaAngleDown />
      </div>
    </div>
  );
}

export default PackageSelect;
