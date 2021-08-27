import React, { useEffect, useState } from "react";
import "./ProfileManageInfo.css";
 
import {FaEye,FaLink} from 'react-icons/fa';
import { Chip } from "@material-ui/core";

function ProfileManageInfo({userName,handleOpen}) {

  const [copyChip, setCopyChip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopyChip(false);
    }, 1000);
    
    // To clear or cancel a timer, you call the clearTimeout(); method, 
    // passing in the timer object that you created into clearTimeout().
    
    return () => clearTimeout(timer);
  }, [copyChip]);     

  const copyLinkHandler = () =>{
    setCopyChip(true);
    navigator.clipboard.writeText('https://hype.bio/'+userName);
    
  }
  
  return (
    <div className="profileManageInfo">
      <div className="profileManageInfo__pic">
        <img
          src="https://images.unsplash.com/photo-1627673081968-c1f6204b0a14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
      </div>
      <h5>@{userName}</h5>
      <div className="profileManageInfo__linkwrapper">
        <FaLink />
        <p>
          <span>hype.bio/</span>{userName}
        </p>
      </div>
      <div className="profileManageInfo__buttonwrapper">
            <a onClick={handleOpen}>
                EDIT
            </a>
           
            <a onClick={copyLinkHandler}>
                COPY
            </a>
            <a href={"https://hype.bio/"+userName}  target='_blank' id="eye">
                <FaEye />
            </a>
      </div>
      {copyChip?<Chip label="Link Copied"    color="primary" />:''}
      

    </div>
  );
}

export default ProfileManageInfo;
