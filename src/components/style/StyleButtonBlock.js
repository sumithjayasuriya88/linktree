import React from 'react'
import { Link } from 'react-router-dom'
import './StyleButtonBlock.css'
import StyleEditButtons from './StyleEditButtons'

function StyleButtonBlock() {
    return (
        <div className='styleButtonBlock'>
             <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                 This is button
             </a>
             <StyleEditButtons />
        </div>
    )
}

export default StyleButtonBlock
