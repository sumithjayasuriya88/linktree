import React from 'react'
import './HomeFeatured.css'

function HomeFeatured() {
    return (
        <div className='homeFeatured'>
            <h5>As featured in</h5>
            <div className="homeFeatured__container">
                <img src={process.env.PUBLIC_URL + '/images/digital-trends-blue-grey.svg'} alt="" />    
                <img src={process.env.PUBLIC_URL + '/images/entrepreneur-blue-grey__2_.svg'} alt="" />    
                <img src={process.env.PUBLIC_URL + '/images/forbes-blue-grey.svg'}alt="" />    
                <img src={process.env.PUBLIC_URL + '/images/engadget-blue-grey.svg'}  alt="" />    
            </div>   
        </div>
    )
}

export default HomeFeatured
