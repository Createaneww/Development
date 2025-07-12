"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Generate = () => {

  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const creating = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setUrl("")
        setShorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }



  return (
    <>
      <div className='text-white mx-auto max-w-2xl bg-[#1e202a]/20 backdrop-blur-md rounded-xl shadow-2xl mt-18 mb-30  flex flex-col justify-center '>

        <h1 className='mt-8 text-center mb-5 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-5xl text-transparent font-bold p-8'>Generate your short urls</h1>

        <div className='flex flex-col gap-6'>
          <input type="text" placeholder='Enter your url'
            value={url}

            className='p-4 focus:outline-none text-white'
            onChange={e => { setUrl(e.target.value) }} />

          <input type="text" placeholder='Enter your preferred short url text'
            value={shorturl}
            className='p-4 focus:outline-none'
            onChange={e => { setShorturl(e.target.value) }} />

          <button onClick={() => creating()} className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl '>
              Generate
            </span>
          </button>
        </div>



        {generated && <>
         <span className='font-bold text-xl py-2 mt-3'>Your link</span><code> <Link target='_blank' href={generated}>{generated}</Link> 
        </code> </>}
        
      </div>

    </>
  )
}

export default Generate
