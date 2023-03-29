import React from 'react'
import logo from '../images/logo.png'

export default function Footer() {
  return (
    <footer>
      <img src={logo} className='logo' alt='logo'></img>
      <p>Copyright © 2021 Sud-Stainable Laundry Co. - All Rights Reserved. <br></br>**All customers will be subject to new customer sign up process.**</p>
      <div className='footer__social-media'></div>
    </footer>
  )
}
