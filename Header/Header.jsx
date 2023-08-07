import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className='headerlogo'>
        <img className='logo' src="./src/assets/trippylogo.jpeg" alt="logo" srcset=""/>
        </div>
        <div className='headernamesprofile'>
            <div className='headernames'>
                <ul>
                    <li>Home</li>
                    <li>Booking</li>
                    <li>Explore</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='headerprofile'>
                <div className='smallcircle'>
                    <h2 className='usertext'>JD</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header