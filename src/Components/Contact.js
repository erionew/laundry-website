import React from 'react'

export default function Contact() {
  return (
    <div className='contact--container'>
        <div>
            <h4>Better yet see us in person!</h4>
            <p>We would love to make you apart of the Sud-Stainable Laundry Co. family so feel free to call us during normal business hours for more information.</p>
            <p><em>Sud-Stainable Laundry Co.</em></p>
            <p>Hours</p>
            <table>
                <tr>
                    <td>Monday</td>
                    <td>7:00 AM - 7:00PM</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>7:00 AM - 7:00PM</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>7:00 AM - 7:00PM</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>7:00 AM - 7:00PM</td>
                </tr>
                <tr>
                    <td>Fridayday</td>
                    <td>7:00 AM - 7:00PM</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>7:00 AM - 7:00PM</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>Closed</td>
                </tr>
            </table>
        </div>
        <div>
            <h3>Contact Us</h3>
            <p>With this service we provide a solution for every aspect of doing laundry. By choosing this luxury service you no longer have to worry about washing, folding or putting laundry away.</p>
            <form>
                <input type='text' placeholder='Name'></input>
                <input type= 'email' placeholder='Email'></input>
                <textarea placeholder='Message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}
