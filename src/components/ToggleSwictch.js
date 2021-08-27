import React from 'react'
import './ToggleSwictch.css'

function ToggleSwictch() {
    return (
        <div className='toggleSwictch'>
            <label className='switch'>
                <input type="checkbox" />
                <span className='slider'></span>
            </label>
        </div>
    )
    
}

export default ToggleSwictch
