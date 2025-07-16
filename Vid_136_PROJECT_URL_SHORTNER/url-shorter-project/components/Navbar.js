"use client"
import React from 'react'
import Link from 'next/link'
import localFont from "next/font/local"

const usepoppins = localFont({
  src: "../app/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const Navbar = () => {  
  return (
    <>
    <nav className='flex justify-between items-center bg-gradient-to-t from-[#3e3e3e] to-[#f4f4f4] bg-clip-text text-xl text-transparent mt-10'>
  <div className={`logo ml-10 font-bold text-3xl ${usepoppins.className}`}>
        <Link href="/">🔗 SHORTY URLs</Link>
      </div>
      <ul className={`flex gap-5 justify-center items-center font-bold mr-10 ${usepoppins.className}` }>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About us</li></Link>
        <Link href="/generate"><li>Shortner</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <Link href="/generate"><li>
          <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3e3e3e_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 font-medium text-gray-50 backdrop-blur-3xl'>
        Try now
      </div>
    </span></li></Link>
        <Link href="/github"><li>
          <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3e3e3e_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 font-medium text-gray-50 backdrop-blur-3xl'>
        Github
      </div>
    </span></li></Link>
      </ul>
    </nav>
    
    </>
  )
}

export default Navbar
