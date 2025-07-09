"use client"
import React from 'react'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'



const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setCurrentUser] = useState([])
    const [payments, setPayments] = useState([])
    const SearchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (SearchParams.get("paymentdone") == "true") {
            toast.success('💸Payment done successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            router.push(`/${username}`)
        }
    }, [])



    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }


    const pay = async (amount) => {
        const a = await initiate(amount, username, paymentform);
        const orderId = a.order.id;
        const key = a.key_id;


        var options = {
            "key": currentUser.razorpayid, //  Fix: Use key from backend
            "amount": amount,
            "currency": "INR",
            "name": "Take a step ahead",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, // optional fix
            "prefill": {
                "name": paymentform.name,
                "email": "gaurav.kumar@example.com", // optionally dynamic
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options)
        rzp1.open()
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <img className='object-cover w-full h-[350px] max-sm:object-cover max-sm:p-1' src={currentUser.coverpic} alt="cover" />
                <div className='absolute -bottom-14 right-[45%] max-sm:right-[30%]'>
                    <img className='border-2 border-white rounded-3xl'
                        width={150}
                        height={150}
                        src={currentUser.profilepic}
                        alt="profile"
                    />
                </div>
            </div>

            {/* User Info & Payment Section */}
            <div className="info w-full max-w-5xl mx-auto flex flex-col justify-center items-center mt-20 gap-4 my-24 mb-8">
                <div className='font-bold text-lg max-sm:text-sm'>
                    @{username}
                </div>

                <div className='text-slate-400 text-center max-sm:text-sm'>
                   Let's help {username} to grow beyond the limits
                </div>

                <div className='text-slate-400 max-sm:text-sm'>
                <span className='font-bold'>{payments.length}</span> Payments · Total fund raised <span className='font-bold'>₹{payments.reduce((a,b) => a+b.amount , 0)}</span>
                </div>

                <div className="payment flex gap-3 w-6/5 mb-8  text-white">
                    {/* Supportors Leaderboard */}
                    <div className="supportors w-1/2 bg-slate-950 p-5 rounded-lg opacity-65 shadow-xl">
                        <h2 className=" mb-3 text-2xl text-center font-bold max-sm:text-sm max-sm:">Top 10 Supporters</h2>
                        <ul className="list-disc list-inside mx-5 text-lg">
                            {payments.length === 0 && <span>No payments yet</span>}
                            {payments.map((p, i) => {
                                return <li key={p._id} className='my-4 flex gap-2  items-center'>
                                    <img src="avatar.gif" width={50} alt="user gif" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message-"{p.message}"</span>
                                </li>
                            })}
                        </ul>
                    </div>

                    {/* Make Payment */}
                    <div className="makepayment w-1/2 bg-slate-950 p-5 rounded-lg opacity-65 shadow-xl font-bold">
                        <h2 className=" mb-3 text-2xl text-center">Make a Payment</h2>
                        <div className='flex gap-2.5 flex-col font-bold'>
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />

                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

                            <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />


                            <button onClick={() =>
                                pay(Number.parseInt(paymentform.amount) * 100)
                            } className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 disabled:bg-purple-500 cursor-pointer">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-whiterounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Pay
                                </span>
                            </button>
                        </div>
                        {/* Or choose from these amounts */}
                        <div className='flex gap-3 mt-5'>
                            <button className='bg-slate-900 p-3 rounded-lg cursor-pointer shadow-xl' onClick={() =>
                                pay(1000)
                            }>Pay ₹10</button>
                            <button className='bg-slate-900 p-3 rounded-lg cursor-pointer shadow-xl' onClick={() =>
                                pay(2000)
                            }>Pay ₹20</button>
                            <button className='bg-slate-900 p-3 rounded-lg cursor-pointer shadow-xl' onClick={() =>
                                pay(3000)
                            }>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentPage
