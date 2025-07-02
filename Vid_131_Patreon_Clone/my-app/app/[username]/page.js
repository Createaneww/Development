import React from 'react'

const Username = ({ params }) => {
  return (
    <>

      <div className='cover w-full relative'>
        <img className='object-cover w-full h-[350]' src="/our Space.gif" alt="" />
        <div className='absolute -bottom-15 right-[46%]'>
          <img className='border-2 border-white rounded-4xl' width={150} height={150} src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/f6eea191269521.5e3167d9ba6f1.gif" alt="" />
        </div>
      </div>
      <div className="info absolute left-[32.9%] flex flex-col justify-center items-center my-22 gap-2">
        <div className='font-bold text-lg'>
        @{params.username}
        </div>
        <div className='text-slate-400'>
          A Custom Server & Mod Launcher for STAR WARS Battlefront II (PC)
        </div>
        <div className='text-slate-400'>
          17,709 paid members . 11 Posts
        </div>
      </div>
    </>
  )

}

export default Username
