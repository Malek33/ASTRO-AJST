import React from 'react'
import './Navbar.css'
import logo from '../../srcs/ajst-logo.png'

function Navbar() {
  return (
    <div className='Nav-bar'>

        <div className='half-left-navbar'>
            
            <div><img className='ajst-logo' src={logo} alt='AJST-LOGO' /></div>

            <div>
              <ul className='linkers'>
                <li><a className='active' href='https://facebbok.com'>Home</a></li>
                <li><a href='https://facebbok.com'>Contact us</a></li>
                <li><a href='https://facebbok.com'>Library</a></li>
                <li><a href='https://facebbok.com'>Academy</a></li>
              </ul>
            </div>
        
        </div>

        <div className='half-right-navbar' >
            <a href='https://facebbok.com'>SIGN IN</a>
        </div>

    </div>
  )
}

export default Navbar