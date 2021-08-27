import React, { useState } from "react";
import "./ProfileLink.css";

import ToggleSwictch from "../ToggleSwictch";


import {FaImage,FaClock,FaFolderOpen,FaChartPie,FaThumbtack,FaHighlighter,FaSort,FaPen,FaTrash} from 'react-icons/fa'
 

function ProfileLink({ title, linkaddress }) {

  const [fromDate, setFromDate] = useState("Aug 26 at 12:55 AM");
  const [toDate, setToDate] = useState("Aug 26 at 12:55 AM");
  const [inGroup, setInGroup] = useState("group1");
  
  return (
    <div className="profileLink">
      <div className="profileLink_card">
        <div className="profileLink__cardHeader">
          <div className="profileLink__cardHeaderDragbutton">
            <FaSort />
            <p>DRAG ME</p>
          </div>
          <div className="profileLink__cardHeaderTogglebutton">
            <ToggleSwictch />
          </div>
        </div>
        <div className="profileLink__cardBody">
          <img
            src="https://images.unsplash.com/photo-1542973748-658653fb3d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80"
            alt=""
          />
          <div className="profileLink__cardBodyInformation">
            <div className="info__top">
              <div className='info__topDetails'>
                <h2>{title}</h2>
                <p>{linkaddress}</p>
                <div className="info__dateWrapper">
                  {fromDate !== "" ? <span>{"From " + fromDate}</span> : ""}
                  {toDate !== "" ? <span>{"To " + toDate}</span> : ""}
                </div>
                <span>In Group: Best Sellers</span>
              </div>
              <FaPen />
            </div>
            <div className="info__bottom">
              <div>
                <button>
                  <FaImage/>
                </button>
                <button>
                  <FaClock/>
                </button>
                <button>
                  <FaFolderOpen/>
                </button>
                <button>
                  <FaChartPie/>
                </button>
                <button>
                  <FaThumbtack/>
                </button>
                <button>
                  <FaHighlighter/>
                </button>
               
              </div>
              <button>
              <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLink;
