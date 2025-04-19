import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    
  return (
      <nav>
        <ul className='flex gap-[34px] bg-blue-400 p-4 text-white'>
            <NavLink className={(e)=>{return e.isActive?"bg-red-400":"" }} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"bg-red-400":"" }} to="/login"><li>Login</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"bg-red-400":"" }} to="/about"><li>ABout us</li></NavLink>
        </ul>
      </nav>
  )
}

export default Navbar
