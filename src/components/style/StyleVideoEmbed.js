import React from 'react'
import StyleEditButtons from './StyleEditButtons'
import './StyleVideoEmbed.css'

function StyleVideoEmbed() {
    return (
        <div className='styleVideoEmbed'>
            <iFrame src='https://www.youtube.com/embed/y375vIR3jjs'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube">

            </iFrame>
            <StyleEditButtons />
        </div>
    )
}

export default StyleVideoEmbed
