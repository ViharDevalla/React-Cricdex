import React from 'react'
import '../css/style.css'
import logo from '../assets/logo.png'
function Header() {
    return (
        <div className="header">
            <a href="/"><img src={logo} height='80px' alt='logo' className='logo' href="/"/></a>
        </div>
    )
}

export default Header
