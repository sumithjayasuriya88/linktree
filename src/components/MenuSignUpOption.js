import {Link} from 'react-router-dom';
import React from 'react'
import './MenuSignUpOption.css'

function MenuSignUpOption({title}) {
    return (
        <div className='MenuSignUpOption'>
            <Link to='/signup'>
             <p>{title}</p>      
            </Link>
               
        </div>
    )
}

export default MenuSignUpOption
