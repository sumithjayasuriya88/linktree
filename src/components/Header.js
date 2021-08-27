import React from 'react'
import './Header.css'
import MenuOption from './MenuOption'
import MenuSignUpOption from './MenuSignUpOption'


function Header() {

   

    return (
        <div className='header'>
            <div className="header__left">
            
                <img src={process.env.PUBLIC_URL + '/images/logo.jpg'} alt='Logo' /> 
                <MenuOption title='Blog' />
                <MenuOption title='Pricing' />
                <MenuOption title='Help' />
            </div>
            <div className="header__right">
               <MenuOption title='Login' to='/login' />
               <MenuSignUpOption title='SIGN UP FREE' />
            </div>
        </div>
    )
}

export default Header
