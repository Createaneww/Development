import PaymentPage from '@/componets/PaymentPage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
  //If user not present in the Db , return 404 page
  const checkuser = async () => {
    await connectDb()
    let u = await User.findOne({ username: params.username})
    if (!u) {
      return notFound()
    }
  }
  await checkuser()
  return (

    <>
      <PaymentPage username={params.username} />
    </>
  )

}

export default Username


