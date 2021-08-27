    import React from 'react'
import ProfileLink from './ProfileLink'
    import './ProfileLinkList.css'
    
    function ProfileLinkList() {
        return (
            <div className='profileLinkList'>
                <ProfileLink  title='Link Title' linkaddress='http://MyDoman.com'/>
                <ProfileLink  title='Link Title2' linkaddress='http://MyDoman.com'/>
                <ProfileLink  title='Link Title3' linkaddress='http://MyDoman.com'/>
                <ProfileLink  title='Link Title4' linkaddress='http://MyDoman.com'/>
            </div>
        )
    }
    
    export default ProfileLinkList
    