import React from 'react'
import './Header.css'
import logo from '../img/crown.png'
import Button from './Button'

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="linksarea">
          <ul>
            <li ><a href="#" className='active'>Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
       <Button text="Contact Us" bgcolor="orangebtn"/>

      </nav>
    </div>
  )
}

export default Header
