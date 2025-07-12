"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className='flex gap-5'>
        <li>home</li>
        <li>contact us</li>
        <li>login</li>
        <li>more</li>
        <div>You are inside {pathname}</div>
      </ul> 
    </div>
  )
}

export default Navbar
