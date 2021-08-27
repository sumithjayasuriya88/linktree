import React from 'react'
import HomeMobilephone from './HomeMobilephone'
import './HomePageHero.css'

function HomePageHero() {
    return (
        <div className='homePageHero'>
            <h1>The Only Link You’ll Ever Need</h1>
            <h4>Connect audiences to all of your content with just one link</h4>
             <a href="#">GET STARED FOR FREE</a>
             <p>Already on Hype.bio? <span>Log in</span></p>
             <HomeMobilephone />
        </div>
    )
}

export default HomePageHero
