import React from 'react'
import StyleEditButtons from './StyleEditButtons'
import './StyleLineDivider.css'

function StyleLineDivider() {
    return (
        <div className='styleLineDivider'>
            <div className="StyleLineDivider__line"></div>
            <StyleEditButtons />
        </div>
    )
}
 

export default StyleLineDivider
