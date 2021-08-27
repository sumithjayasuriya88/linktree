import React from 'react'
import './ProfileFooter.css'
import LinkIcon from '@material-ui/icons/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { FaBeer } from 'react-icons/fa';

function ProfileFooter() {
    return (
        <div className='profileFooter'>
            <div className="links__wrapper">
                <p>follow
                <a href="">
                <LinkIcon/>
                INK.BIO
                </a>
                </p>
            </div>
            <div className="socialIcons__wrapper">
            <FacebookIcon/>
            <InstagramIcon/>
            </div>
            <div className="copyright__wrapper">
                <p>© 2016-2021 LNK.BIO - All rights reserved.</p>
                <p>Terms & Conditions - Privacy Policy</p>
                <FaBeer />
            </div>
        </div>
    )
}
 

export default ProfileFooter
