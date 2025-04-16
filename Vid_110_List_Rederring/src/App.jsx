import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
    title:"Hey",
    desc:"I am good Todo"
    },
    {
    title:"Hey another todo",
    desc:"I am good Todo too"
    },
    {
    title:"Hey shopping todo",
    desc:"I am good Todo too and a groceory todo"
    }
    
  ])

  const Todo = ({todo})=>{return(
    <>
    <div className="m-3 border border-1 border-purple-400">
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </div>
    </>
  )} 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todos.map(todo=>{
        return <Todo key={todo.title} todo = {todo}/>
      })}
      
           {/* {showbtn?<button>I will be shown will shown when second btn is clicked</button>:""} */}
{showbtn && <button>I will be shown will shown when second btn is clicked</button>}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
