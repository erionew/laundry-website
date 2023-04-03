import React from 'react'
import '../Stylesheets/header.scss'
import { Slide } from "react-awesome-reveal";

export default function Header() {
  return (
    <header className='header--container'>
        <Slide triggerOnce >
          <h1>Welcome to</h1>
          <h1 className='text--teal'>Sud-Stainable<br></br>Laundry Co.</h1>
          <div className='css-graphic'></div>
          <div className='header__links'>
            <a className='a--teal'>Read More</a>
            <a className='a--outline'>Contact Us</a>
          </div>
        </Slide>
        
    </header>
  )
}
