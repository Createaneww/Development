import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [ID, setID] = useState(0)
  const [userId, setuserId] = useState(0)
  const [title, settitle] = useState(0)
  const [body, setbody] = useState(0)





  return (
    <>
      <div className="container bg-gray-500 mt-5 w-[25vw] flex flex-col ml-6 rounded-2xl">
      <div className="title font-bold text-xl bg-gray-600 p-4"><h1 className=''>Title</h1></div>
      <div className="userid p-2">ID</div>
      <div className="userid p-2">USErid</div>
      <div className="userid p-[100px] border border-black rounded-2xl">BODY</div>
      </div>
    </>
  )
}

export default App
