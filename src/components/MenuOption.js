import React from 'react'
import { Link } from 'react-router-dom'
import './MenuOption.css'

function MenuOption({title,to}) {
    return (
        <div className='menuOption'>
            <Link to={to}>
            <p>{title}</p>
            </Link>
          
        </div>
    )
}

export default MenuOption
