import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
 <nav className='bg-white border w-[90vw] mx-auto fixed top-12 right-[5vw] p-3 rounded-full flex justify-between'>
  <div className='flex gap-16 items-center'>
    <Link href="/"><img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" className='ml-5 py-2 text-[16px]' width={125} alt="" /></Link>
    <ul className='flex gap-8 text-[17px] font-normal'>
      <li>Products</li>
      <li>Templates</li>
      <li>Marketplace</li>
      <li>Learn</li>
      <li>Pricing</li>
    </ul>
  </div>
  <div className='loginbtns flex gap-2'>
    <button className='bg-[#eff0ec] p-5 rounded-lg font-medium text-[16px]'>Log in</button>
    <button className='bg-[#1e2330] p-4 px-9 rounded-4xl font-medium text-[16px] text-white'>Sign up free</button>
  </div>
 </nav>
  )
}

export default Navbar
