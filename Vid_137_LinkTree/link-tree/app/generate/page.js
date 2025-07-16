"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

const searchParams = useSearchParams();
  // const [link, setlink] = useState("")
  // const [linktxt, setLinktxt] = useState("")
  const [links, setLinks] = useState([{ link: "", linktxt: "" }])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [pic, setpic] = useState("")



  const handleChange = (index, link, linktxt) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktxt }
        }
        else {
          return item
        }
      })
    })
  }
  const addlink = () => {
    setLinks(links.concat([{ link: "", linktxt: "" }]))
  }


  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/create", requestOptions)
    const result = await r.json()
    if (toast.success) {
      toast.success(result.message)
      setLinks([])
      setpic("")
      sethandle("")
    } else {
      toast.error(result.message)
    }


  }



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>
        <div className='col 1 flex flex-col justify-center items-center gap-5 pt-30 text-[#1e2330]'>
          <h1 className='font-bold text-5xl'>
            Create your LinkTree
          </h1>
          <div className='flex flex-col gap-6 w-xl pl-7'>

            <div className='flex flex-col gap-3'>
              <h2 className='font-bold text-xl'>
                Step 1: Claim your handle
              </h2>
              <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='bg-white p-5 pr-40 rounded-3xl focus: outline-pink-300 ' type="text" placeholder='Enter your handle' />

            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='font-bold text-xl'>
                Step 2: Add your links
              </h2>
              {links && links.map((item, index) => {
                return <div key={index} className='mx-4'>
                  <input value={item.linktxt || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white' type="text" placeholder='Enter link text' />
                  <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktxt) }} className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white'
                    type="text" placeholder='Enter link' />
                </div>
              })}
              <button onClick={() => addlink()} className='font-extrabold text-white bg-[#1e2330] p-2 rounded-3xl cursor-pointer'>+ Add link</button>
            </div>

            <div className='flex flex-col gap-3'>
              <h2 className='font-bold text-xl'>
                Step 3: Add picture and finalize
              </h2>
              <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='bg-white p-5 pr-40 rounded-3xl focus: outline-pink-300 ' type="text" placeholder='Enter link of your picture' />
            </div>

            <button disabled={pic=="" || handle == "" || links[0].linktxt == ""} onClick={() => { submitLinks() }} className=' disabled:bg-slate-600 font-extrabold bg-[#1e2330] p-5 rounded-3xl cursor-pointer text-white'>Generate</button>
          </div>
        </div>
        <div className='col 2 w-full h-screen' >
          <img src="/generate.png" alt="" className='h-full object-contain' />
        </div>
      </div>
    </>
  )
}

export default Generate
