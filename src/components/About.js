import React from 'react'
//import {ab} from './Home';
import register from './../../src/images/register.jpeg'
import login from './../../src/images/login.jpeg'
import book from './../../src/images/book.png'

const About=() => {
  return (
    
    <div className='ab'>
        <h2 align='center' padding-top='10px'>About</h2>
        <div className='info'>
          <p>
            Book your car parking space for faster parking access. Gives prior information of available parking slots.
            Register yourself in the website, login and book a parking slot for a given time slot.
            The bookings can be done under the category of teacher and student, where teachers are given more priority.

          </p>
        </div>
        <div className='container1'>
          <div className='SlotNode1'>
              <div className='thumbnail'>
                  <a href='/register'><img src={register} alt="node"></img></a>
              </div>
              <div className='description'>
                <a href='/register'><h1><b>Register</b></h1></a>
              </div>
          </div>
          <div className='SlotNode1'>
              <div className='thumbnail'>
                <a href='/login'><img src={login} alt="node"></img></a>
              </div>
              <div className='description'>
                <a href='/login'><h1><b>Sign In</b></h1></a>
              </div>
          </div>
          <div className='SlotNode1'>
              <div className='thumbnail'>
                <a href='/slot'><img src={book} alt="node"></img></a>
              </div>
              <div className='description'>
                <a href='/slot'><h1><b>Book Slot</b></h1></a>
              </div>
          </div>
        </div>
      </div>
    
  )
}

export default About