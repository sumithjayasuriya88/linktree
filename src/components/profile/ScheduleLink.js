import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./ScheduleLink.css";
import {FaTimes} from 'react-icons/fa';

function ScheduleLink({ openScheduleLink, scheduleLinkhandleClose }) {
  const [months, setMonths] = useState({
    1: "January",
    2: "January",
  });

  const body = (
    <div className="modelBody">
      <div className="modal_header">
        <h2>Schedule Link</h2>
        <button>
        <FaTimes/>
        </button>
      </div>
      <div className="modal_content">
        <div className="sch__from_top">
          <p>Schedule From:</p>
          <div className="toggleSwictch">
            <input type="checkbox" name="fromcheck" id="fromcheck" />
            <label for="fromcheck"></label>
          </div>
        </div>
        <div className="sch__from_dateWrapper">
          <select name="" id="">
            <option value="1">Year</option>
            <option value="1">2021</option>
            <option value="1">2022</option>
            <option value="1">2023</option>
          </select>
          <select name="" id="">
            <option value="1">Month</option>
            <option value="1">August</option>
            <option value="1">September</option>
            <option value="1">October</option>
            <option value="1">November</option>
            <option value="1">December</option>
          </select>
          <select name="" id="">
            <option value="1">Day</option>
            <option value="1">1st</option>
            <option value="1">2nd</option>
            <option value="1">3rd</option>
          </select>
        </div>
        <div className="sch__from_timeWrapper">
          <select name="" id="">
            <option value="1">Year</option>
            <option value="1">2021</option>
            <option value="1">2022</option>
            <option value="1">2023</option>
          </select>
          <select name="" id="">
            <option value="1">Year</option>
            <option value="1">2021</option>
            <option value="1">2022</option>
            <option value="1">2023</option>
          </select>
        </div>
        <div className="sch__from_top">
          <p>Schedule To:</p>
          <input type="checkbox" name="tocheck" id="" />
        </div>
        <div className="sch__from_dateWrapper">
          <select name="" id="">
            <option value="1">Year</option>
            <option value="1">2021</option>
            <option value="1">2022</option>
            <option value="1">2023</option>
          </select>
          <select name="" id="">
            <option value="1">Month</option>
            <option value="1">August</option>
            <option value="1">September</option>
            <option value="1">October</option>
            <option value="1">November</option>
            <option value="1">December</option>
          </select>
          <select name="" id="">
            <option value="1">Day</option>
            <option value="1">1st</option>
            <option value="1">2nd</option>
            <option value="1">3rd</option>
          </select>
        </div>
        <div className="sch__from_timeWrapper">
          <select name="" id="">
            <option value="1">Day</option>
            <option value="1">1st</option>
            <option value="1">2nd</option>
            <option value="1">3rd</option>
          </select>
          <select name="" id="">
            <option value="1">Day</option>
            <option value="1">1st</option>
            <option value="1">2nd</option>
            <option value="1">3rd</option>
          </select>
        </div>
        <p>Timezone:Asia/Calcutta</p>
      </div>
      <div className="modal__footer">
        <button className="close__btn">Remove Scheduling</button>
        <button className="save__btn">Save</button>
      </div>
    </div>
  );

  return (
    <div className="scheduleLink">
      <Modal
        open={openScheduleLink}
        onClose={scheduleLinkhandleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default ScheduleLink;
