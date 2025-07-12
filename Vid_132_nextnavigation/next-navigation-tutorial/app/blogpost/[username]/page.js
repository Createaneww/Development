"use client"
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Blogpost = () => {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])


    return (
        <>
            <div>{params.username}</div>
            <button onClick={() => router.push('/')} className='p-5 bg-white text-black'>Homepage</button>
        </>
    )
}

export default Blogpost   