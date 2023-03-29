import React from 'react'
import logo from '../images/logo.png'
import '../Stylesheets/nav.scss'

export default function Nav() {
  return (
    <nav className='nav--container'>
        {/* <img src={logo} className='logo' alt='logo'></img> */}
        <p className='nav--contact-info'><i class="las la-map-marker"></i>DFW and Surrounding Areas</p>
        <div className='desktop-nav flex'>
              <p className='nav--contact-info'><i class="las la-clock"></i>7:00 AM - 7:00 PM</p>
              <p className='nav--contact-info'><i class="las la-phone-volume"></i>(214) 223 - 9496</p>
        </div>
        <div className='mobile-nav'>
          <a href='#section--contact'>Contact Us</a>
        </div>
  </nav>
  )
}
