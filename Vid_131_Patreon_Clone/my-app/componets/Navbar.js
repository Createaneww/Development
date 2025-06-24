import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between items-center'>
        <div className='LOGO ml-4 p-2 font-bold text-2xl'>Fund Collector</div>
        <ul className='flex gap-5 p-5'>
            <li>Home</li>
            <li>Contact</li>
            <li>About us</li>
            <li>Sign-up</li>
        </ul>
    </nav>
  )
}

export default Navbar
