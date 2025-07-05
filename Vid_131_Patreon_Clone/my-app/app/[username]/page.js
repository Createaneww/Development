import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      {/* Cover Image */}
      <div className='cover w-full relative'>
        <img className='object-cover w-full h-[350px]' src="/our Space.gif" alt="cover" />
        <div className='absolute -bottom-14 right-[46%]'>
          <img
            className='border-2 border-white rounded-3xl'
            width={150}
            height={150}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/f6eea191269521.5e3167d9ba6f1.gif"
            alt="profile"
          />
        </div>
      </div>

      {/* User Info & Payment Section */}
      <div className="info w-full max-w-5xl mx-auto flex flex-col justify-center items-center mt-20 gap-4 my-24 mb-8">
        <div className='font-bold text-lg'>
          @{params.username}
        </div>

        <div className='text-slate-400 text-center'>
          A Custom Server & Mod Launcher for STAR WARS Battlefront II (PC)
        </div>

        <div className='text-slate-400'>
          17,709 paid members · 11 Posts
        </div>

        <div className="payment flex gap-3 w-6/5 mb-8  text-white">
          {/* Supportors Leaderboard */}
          <div className="supportors w-1/2 bg-slate-950 p-5 rounded-lg opacity-65 shadow-xl">
            <h2 className=" mb-3 text-2xl text-center font-bold">Top Supporters</h2>
            <ul className="list-disc list-inside mx-5 text-lg">
              <li className='my-4 flex gap-2  items-center'>
                <img src="avatar.gif" width={50} alt="user gif" />
                <span>Manvar donated <span className='font-bold'>$56</span> with a message-"I support you bro❤️"</span>
                </li>
                <li className='my-4 flex gap-2  items-center'>
                <img src="avatar.gif" width={45} alt="user gif" />
                <span>Manvar donated <span className='font-bold'>$56</span> with a message ""</span>
                </li>
                <li className='my-4 flex gap-2  items-center'>
                <img src="avatar.gif" width={45} alt="user gif" />
                <span>Manvar donated <span className='font-bold'>$56</span> with a message ""</span>
                </li>
              </ul>
          </div>

          {/* Make Payment */}
          <div className="makepayment w-1/2 bg-slate-950 p-5 rounded-lg opacity-65 shadow-xl font-bold">
            <h2 className=" mb-3 text-2xl text-center">Make a Payment</h2>
            <div className='flex gap-2.5 flex-col font-bold'>
              <input className='w-full p-3 rounded-lg bg-slate-900' type="text" placeholder='Enter the name' />
              <input className='w-full p-3 rounded-lg bg-slate-900' type="text" placeholder='Enter the message' />
              <input className='w-full p-3 rounded-lg bg-slate-900' type="text" placeholder='Enter the amount' />
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-whiterounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Pay
                </span>
              </button>
            </div>
            {/* Or choose from these amounts */}
            <div className='flex gap-3 mt-5'>
              <button className='bg-slate-900 p-3 rounded-lg cursor-pointer shadow-xl'>Pay$10</button>
              <button className='bg-slate-900 p-3 rounded-lg cursor-pointer shadow-xl'>Pay$20</button>
              <button className='bg-slate-900 p-3 rounded-lg cursor-pointer shadow-xl'>Pay$30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username

