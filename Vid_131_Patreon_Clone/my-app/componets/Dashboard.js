import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [session])

    return (
        <>
            <div className='container mx-auto py-5 px-6 '>
                <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

                <form className="max-w-2xl mx-auto">
                    <div className='my-2'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name='name' id="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className="my-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name='email' id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name='username' id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className="my-2">
                        <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                        <input type="text" name='profilepic' id="profilepic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className="my-2">
                        <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
                        <input type="text" name='coverpic' id="coverpic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className="my-2">
                        <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Id</label>
                        <input type="text" name='razorpayid' id="razorpayid" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className="my-2">
                        <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
                        <input type="text" name='razorpaysecret' id="razorpaysecret" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                    </div>

                    <div className="my-6">
                        <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard
