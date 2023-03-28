import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import bagsImg from '../images/bags.jpg'
import drawerOrganizer from '../images/drawerorganizer.jpeg'
import foldedClothes from '../images/foldedclothes.jpg'
import towels from '../images/towels.jpg'
import detergents from '../images/detergents.jpg'
import illustration from '../images/illustration.PNG'

export default function Gallery() {
  return (
    <div className='gallery--container'>
      <Carousel autoPlay='true' >
        <div>
            <img src={illustration}></img>
        </div>
        <div>
            <img src={foldedClothes}></img>
        </div>
        <div>
            <img src={towels}></img>
        </div>
        <div>
            <img src={detergents}></img>
        </div>
        <div>
            <img src={drawerOrganizer}></img>
        </div>
        <div>
            <img src={bagsImg}></img>
        </div>
      </Carousel>
    </div>
  )
}
