import React, { useState } from 'react'
import ProfileFooter from '../components/profile/ProfileFooter'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileLinkList from '../components/profile/ProfileLinkList'
import ProfileLinkMaker from '../components/profile/ProfileLinkMaker'
import ProfileManageInfo from '../components/profile/ProfileManageInfo'
import ScheduleLink from '../components/profile/ScheduleLink'
import EditMyLink from './EditMyLink'
import './ProfileManagePage.css'

function ProfileManagePage() {
    
    const [openEditUser, setOpenEditUser] = useState(false);
    const [openScheduleLink, setOpenScheduleLink] = useState(false);

    const [linkUserName, setLinkUserName] = useState("SumithJayaLink");

    const handleOpen = () => {
        setOpenEditUser(true); 
      };
    
      const handleClose = () => {
        setOpenEditUser(false);
       
      };

      const scheduleLinkhandleOpen =  () => {
        setOpenScheduleLink(true);
       
      };

      const scheduleLinkhandleClose =  () => {
        setOpenScheduleLink(false);
       
      };

      const updateUserName = (e) => {
        setLinkUserName(e);
      }

    return (
        <div className='profileManagePage'>
            {/* Modals */}
            <EditMyLink linkUserName={linkUserName} openEditUser={openEditUser} handleOpen={handleOpen} handleClose={handleClose}  updateUserName={updateUserName}/>
            <ScheduleLink openScheduleLink={openScheduleLink} />
            {/* Main Components */}
            <ProfileHeader />
            <ProfileManageInfo userName={linkUserName} handleOpen={handleOpen}/>
            <ProfileLinkMaker />
            <ProfileLinkList />
            <ProfileFooter/>
        </div>
    )
}

export default ProfileManagePage
