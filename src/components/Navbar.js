import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='navBar'>
        <h1><a href="/">Car Parking System</a></h1>
        <ul text-align= "right">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/slot">
              Slot Availability
            </Link>
          </li>
          <li>
            <Link to="/register">
              User Register
            </Link>
          </li>
          <li>
            <Link to="/login">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
 
export default Navbar
