import React from "react";
import "./HomeFooter.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

function HomeFooter() {
  return (
    <div className="homeFooter">
      <div className="homeFooter__top">
        <div className="homeFooter__column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Social Good</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="homeFooter__column">
          <h4>Partnerships</h4>
          <ul>
            <li>
              <a href="">Linktree for Enterprise</a>
            </li>
            <li>
              <a href="">Charities</a>
            </li>
            <li>
              <a href="">Linktree Ambassador</a>
            </li>
          </ul>
        </div>
        <div className="homeFooter__column">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="">Help Topics</a>
            </li>
            <li>
              <a href="">Getting Started</a>
            </li>
            <li>
              <a href="">Features How To</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Report a violation</a>
            </li>
          </ul>
        </div>
        <div className="homeFooter__column">
          <h4>Trust & Legal</h4>
          <ul>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Trust Centre</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="homeFooter__bottom">
      <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt='Logo' /> 
        <div className="homeFooter__bottomSocial">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
