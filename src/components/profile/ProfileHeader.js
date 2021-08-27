import React from "react";
import "./ProfileHeader.css";
import LinkIcon from "@material-ui/icons/Link";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderOption from "./HeaderOption";
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import PieChartIcon from '@material-ui/icons/PieChart';
import InstagramIcon from '@material-ui/icons/Instagram';
import PersonIcon from '@material-ui/icons/Person';

import { Link } from "react-router-dom";
import { FaPlusCircle,FaBrush ,FaChartPie, FaInstagram,FaUserAstronaut , FaBell,FaBars} from 'react-icons/fa';

function ProfileHeader() {
  return (
    <div className="profileHeader">
      <div className="header_top">
        <div className="profileHeader__left">
          <div className="profile__name">
            <Link to="/">
            <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" />
            </Link>
        

            
          </div>
        </div>
        <div className="profileHeader__right">
          <FaBell />
          <FaBars />
        </div>
      </div>
      <div className="header__bottom">
          <HeaderOption title='LINKS' activeClass='headerOption active' Icon={FaPlusCircle} to='/manage'/>
          <HeaderOption title='STYLE'  activeClass='headerOption' Icon={FaBrush} to='/manage/style'/>
          <HeaderOption title='STATS'  activeClass='headerOption' Icon={FaChartPie} to='/manage' />
          <HeaderOption title='SYNC'   activeClass='headerOption' Icon={FaInstagram} to='/manage'/>
          <HeaderOption title='PROFILE'  activeClass='headerOption' Icon={FaUserAstronaut} to='/manage/profile'/>
      </div>
    </div>
  );
}

export default ProfileHeader;
