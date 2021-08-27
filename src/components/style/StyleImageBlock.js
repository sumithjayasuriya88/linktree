import React from 'react'
import StyleEditButtons from './StyleEditButtons'
import './StyleImageBlock.css'

function StyleImageBlock() {
    return (
        <div className='styleImageBlock'>
                <img src={process.env.PUBLIC_URL + '/images/user_uploads/filippo-cesarini-IWe-Az1t_Vg-unsplash.jpg'} alt="" />
                <StyleEditButtons />
        </div>
    )
}

export default StyleImageBlock
