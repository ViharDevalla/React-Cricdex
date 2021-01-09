import React from 'react'
import '../css/style.css'
import logo from '../assets/logo.png'
function Header() {
    return (
        <div className="header">
            <img src={logo} height='80px' alt='logo' className='logo'/>
            <a href = "/"><button height='80px'></button></a>
            <a href = "/player"><button height='80px'></button></a>
        </div>
    )
}

export default Header
