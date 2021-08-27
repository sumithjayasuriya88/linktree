import { Modal, Slide } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import './EditMyLink.css';
import {FaTimes} from 'react-icons/fa';

function EditMyLink({linkUserName,openEditUser,handleOpen,handleClose,updateUserName}) {

    const [userNameValue, setUserNameValue] = useState(linkUserName);
     

    const saveUserNameHander =() => {
        updateUserName(userNameValue);
        handleClose();
    }
     
      const body = (
        <div className="modelBody">
            <div className="model__header">
            <h2>Edit your Hype.Bio Username</h2>
            <button onClick={handleClose}>
                <FaTimes/>
            </button>
            </div>
           <form>
               <span>hype.bio/</span>
               <input type="text" value={userNameValue} onChange={(e)=>setUserNameValue(e.target.value)}/>
           </form>
            <div className="model_-footer">
                <button className="close__btn" onClick={handleClose}>close</button>
                <button  className="save__btn" onClick={saveUserNameHander}>Save</button>
            </div>
        </div>
      );

    return (
        <div className="editMyLink">
          
            <Modal
        open={openEditUser}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    
        </div>
    )
}

export default EditMyLink
