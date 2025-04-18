import React from 'react'

const Navbar = () => {
  return (
    <nav className='md:flex md:justify-between bg-pink-800 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-9'>i-TaskManager</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Abouts us</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
