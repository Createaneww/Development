import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [cards, setcards] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data);
    
  }

  useEffect(() => {
    fetchdata()
  }, [])




  return (
    <>
      <div className="container flex flex-wrap gap-[34px] rounded-2xl">
        {cards.map((card)=>{
         return <div className="cards gap-[15px] bg-gray-500 max-w-[23vw] max-h-[98vh]">
        <div className="title border border-black font-bold text-xl bg-gray-600 p-4"><h1 className=''>{card.title}</h1></div>
        <div className="userid border border-black p-2">ID: {card.id}</div>
        <div className="userid border border-black p-2"> userID: {card.userId}</div>
        <div className="userid p-[100px] border border-black">{card.body}</div>
        </div> 
        })}
      </div>
    </>
  )
}

export default App
