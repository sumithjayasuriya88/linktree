import React from 'react'
import HomeClientSlider from './HomeClientSlider'
import './HomeJoinTree.css'

function HomeJoinTree() {
    return (
        <div className='homeJoinTree' >
            <div className="homeJoinTree__header">
                <h1>Join the Linktree community</h1>
                <p>The world's biggest influencers, creators, publishers and brands use Linktree in their marketing strategy.</p>
            </div>
            <HomeClientSlider />
            <div><a href="">GET STARTED FOR FREE</a></div>
        </div>
    )
}

export default HomeJoinTree
