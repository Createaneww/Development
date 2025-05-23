import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>COntact us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navbar
