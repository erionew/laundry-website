import React from 'react'
import washAndFold from '../images/washandfold.jpg'
import fold from '../images/fold.jpeg'
import mini from '../images/min.jpg'
import sheets from '../images/sheets.jpg'

export default function Services() {
  return (
    <section className='services--container'>
      <h3>Our Services</h3>

      <div className='services__option'>
        <h4>Pay as you go</h4>
        <div>
            <img src={washAndFold} alt="washing machine"></img>
            <h5>Wash and fold</h5>
            <p>$30.000 Minimum</p>
            <ul>
                <li>24 Hour Turn Around</li>
            </ul>
            <p className='text--teal'></p>
        </div>
        <div>
            <img src={fold} alt="lots of laundry"></img>
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
            <img src={mini} alt="house"></img>
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
            <img src={sheets} alt="blue folded sheets"></img>
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

      <div className='services__option services__menu'>
        <h4>Blast on / Add on services</h4>
        <table>
          <tr>
            <td>Expedited (must be requested by 11:00 am)</td>
            <td>$25.00</td>
          </tr>
          <tr>
            <td>Special Detergent</td>
            <td>$2.00</td>
          </tr>
          <tr>
            <td>Organization Bins</td>
            <td>Call for pricing</td>
          </tr>
          <tr>
            <td>Organization Bins</td>
            <td>Call for pricing</td>
          </tr>
        </table>
        <p>Replacement cloth bags(for clothing to be ironed)</p>
        <table className='table--indented'>
          <tr>
            <td>Small</td>
            <td>$2.50</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>$5.00</td>
          </tr>
        </table>
        <p>Ironing</p>
        <table className='table--indented'>
          <tr>
            <td>Collared / Polo Shirts</td>
            <td>$2.25</td>
          </tr>
          <tr>
            <td>Long Sleeve Shirt</td>
            <td>$3.00</td>
          </tr>
          <tr>
            <td>Short Sleeve Shirt</td>
            <td>$1.00</td>
          </tr>
          <tr>
            <td>Pants</td>
            <td>$2.50</td>
          </tr>
          <tr>
            <td>Skirts</td>
            <td>$3.50</td>
          </tr>
        </table>
      </div>
      

    </section>
  )
}
