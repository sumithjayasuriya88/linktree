import React from 'react'
import './ProfileStyleToolBar.css'
import {FaWindowMaximize,FaRegFileImage,FaPalette,FaFont,FaArrowsAltV}  from "react-icons/fa";
import StyleMenuItem from './StyleMenuItem';
function ProfileStyleToolBar() {
    return (
        <div className='profileStyleToolBar'>
            <StyleMenuItem title='Browser' Icon={FaWindowMaximize} activeClass='active'/>
            <StyleMenuItem title='Wallpaper' Icon={FaRegFileImage} />
            <StyleMenuItem title='Colors' Icon={FaPalette} />
            <StyleMenuItem title='Fonts' Icon={FaFont} />
            <StyleMenuItem title='Move Blocks' Icon={FaArrowsAltV} />
        </div>
    )
}

export default ProfileStyleToolBar
