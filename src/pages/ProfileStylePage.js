import React from 'react'
import { Link } from 'react-router-dom'
import ProfileHeader from '../components/profile/ProfileHeader'
import './ProfileStylePage.css'
import {FaClone,FaEye}  from "react-icons/fa";
import ProfileStyleToolBar from '../components/style/ProfileStyleToolBar';
import StyleMobileView from '../components/style/StyleMobileView';


function ProfileStylePage() {
    return (
        <div  className='profileStylePage'>
                <ProfileHeader />
                <div className="profileStylePage__topButtonwrapper">
                    <Link to='w'>
                        <FaClone />
                        <span>My Pages</span>
                    </Link>
                    <Link to='w'>
                    <FaEye />
                        <span>View Live</span>   
                    </Link>
                </div>
                <ProfileStyleToolBar />
                <StyleMobileView />
        </div>
    )
}

export default ProfileStylePage
