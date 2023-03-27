import React from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='header--container'>
        <Nav />
        <h2>Welcome to</h2>
        <h1>Sud-Stainable<br></br>Laudry Co.</h1>
        <button className='btn--teal'>Read More</button>
        <button className='btn--outline'>Contact Us</button>
    </header>
  )
}
