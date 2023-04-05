import React from 'react'
import '../Stylesheets/about.scss'
import iron from '../images/iron.jpg'

export default function About() {
  return (
    <section className='about--container flex'>
      <div className='about__container--img'>
        <img src={iron}></img>
      </div>
      <div className='about__container--text'>
        <h3>This Is Us</h3>
        <p>Your laundry experience just got easier and better! Here at Sud-Stainable Laundry Co we aim to do just that. Our luxury laundry service is complete with organization, custom folding, and extra special care to your specific laundry needs.</p>
        <p>We are a family owned company providing a clean and reliable answer to laundry care. As mothers of over 25 years, we are well versed in the laundry struggle, offering a reliable solution you can depend on. It is okay to think of us as your luxury concierge so subscribe today. It’s only a button away! <span className='text--teal'>Let us take the load off!</span></p>
      </div>
    </section>
  )
}
