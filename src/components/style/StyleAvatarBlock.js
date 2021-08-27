import { Avatar } from '@material-ui/core'
import React from 'react'
import './StyleAvatarBlock.css'
import StyleEditButtons from './StyleEditButtons'

function StyleAvatarBlock() {
    return (
        <div className='styleAvatarBlock'>
            <img src="https://images.unsplash.com/photo-1542973748-658653fb3d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80" alt="" />
            <p>@devide.demango</p>
            <StyleEditButtons />
        </div>
    )
}

export default StyleAvatarBlock
