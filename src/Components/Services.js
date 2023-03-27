import React from 'react'

export default function Services() {
  return (
    <div className='services--container'>
      <h3>Our Services</h3>

      <div className='services__option'>
        <h4>Pay as you go</h4>
        <div>
            <h5>Wash and fold</h5>
            <p>$30.000 Minimum</p>
            <ul>
                <li>24 Hour Turn Around</li>
            </ul>
            <p className='text--teal'></p>
        </div>
        <div>
            <h5>Fold Only</h5>
            <p>$25.00 Minimum</p>
            <ul>
                <li>Air Fluff</li>
                <li>Custom Folding</li>
            </ul>
            <p className='text--teal'></p>
        </div>
      </div>

      <div className='services__option'>
        <h4>Subscriptions</h4>
        <div>
            <h5>Mini Blast</h5>
            <ul>
                <li>Includes 30 lbs/ each additional lb $1.00 </li>
                <li>1 drawer sleeve provided with completed first service</li>
                <li>Custom folding</li>
                <li>Ironing of 10 pieces of clothing</li>
            </ul>
            <p className='text--teal'></p>
        </div>
        <div>
            <h5>Main Blast</h5>
            <ul>
                <li>Includes 60 lbs/ each additional lb $1.00</li>
                <li>2 drawer sleeves provided with completed first service</li>
                <li>Custom Folding</li>
                <li>Ironing of 20 pieces of clothing</li>
            </ul>
            <p className='text--teal'></p>
        </div>
      </div>

      <div className='services__option'>
        <h4>Blast on / Add on services</h4>
        <p>Expedited (must be requested by 11:00 am)<span className='services__price'>$25.00</span></p>
        <p>Special Detergent<span className='services__price'>$2.00</span></p>
        <p>Organization Bins<span className='services__price'><em>Call for pricing</em></span></p>
        <p>Replacement cloth bags(for clothing to be ironed)</p>
        <p className='text-indented'>Small<span className='services__price'>$2.50</span></p>
        <p className='text-indented'>Large<span className='services__price'>$5.00</span></p>
        <p>Ironing</p>
        <p className='text-indented'>Collared / Polo Shirts<span className='services__price'>$2.25</span></p>
        <p className='text-indented'>Long Sleeve Shirts<span className='services__price'>$3.00</span></p>
        <p className='text-indented'>Short Sleeve Shirt<span className='services__price'>$1.00</span></p>
        <p className='text-indented'>Pants<span className='services__price'>$2.50</span></p>
        <p className='text-indented'>Skirts<span className='services__price'>$3.50</span></p>
      </div>
      

    </div>
  )
}
