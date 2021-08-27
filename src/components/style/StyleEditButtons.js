import React from 'react'
import './StyleEditButtons.css'
import {FaPen,FaTrash}  from "react-icons/fa";

function StyleEditButtons() {
    return (
        <div className='styleEditButtons'>
            <button className='editButton'>
                <FaPen />
            </button>
            <button className='removeButton'>
            <FaTrash />
            </button>
        </div>
    )
}

export default StyleEditButtons
