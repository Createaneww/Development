import { useState , useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function App() {
  const [todo, setTodo] = useState("")  //input text
  const [todos, setTodos] = useState([])  // ye humara sare todos ko hold karega arr ke andar
  const [showFinished, setshowFinished] = useState(true)

useEffect(() => {
  let todostring = localStorage.getItem("todos")
  if(todostring){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }
}, [])


  const savetoLS = () => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  
  

  const handleedit = (e, id) => {
    let t = todos.filter(i => i.id === id) //gives us that todo which was clicked
    setTodo(t[0].todo) // update the inputbox
    let newTodos = todos.filter(item => {  // this will remove the old todo from list
      return item.id !== id
    })
    setTodos(newTodos)  // updates new todo list
    savetoLS()
  }

  const handledelete = (e, id) => {
    // console.log(`The id is ${id}`);
    // let index = todos.findIndex(item=>{
    //   return item.id === id
    //  })
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    savetoLS()
  }

  const handleadd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")  // this will clear the input box
    savetoLS()
  }
  const handlechange = (e) => {
    setTodo(e.target.value)
  }
  const handlecheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    savetoLS()
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        
        <div className="md:container bg-pink-100 rounded-2xl md:w-1/2 my-5 p-5 min-h-[85vh]">
        <h1 className='font-bold text-center text-xl'>iTaskManager - Manage your task at one Place</h1>
          <div className='add-todo my-5 flex flex-col gap-4'>
            <h2 className="text-lg font-bold">Add anything you want as TODO</h2>
            <input onChange={handlechange} value={todo} type="text" className='w-full rounded-lg p-3' />
            <button onClick={handleadd} disabled={todo.length<=3} className='bg-pink-800 hover:bg-pink-900 disabled:bg-pink-700 rounded-md p-3 py-1 text-sm font-bold text-white cursor-pointer'>Save</button>
          </div>
          <input onChange={toggleFinished} type="checkbox" checked={showFinished}/>Show finished
          <h2 className="font-bold text-lg">Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div className='m-40'>No Todos to display</div>}
            {todos.map(item => {

              return (showFinished||!item.isCompleted) && <div key={item.id} className="todo flex justify-between md:w-1/2 my-3">
                <div className='flex gap-5'>
                  <input name={item.id} onChange={handlecheckbox} type="checkbox" checked={todo.isCompleted} id="" />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>

                </div>

                <div className='buttons  flex h-full'>
                  <button onClick={(e) => handleedit(e, item.id)} className='bg-pink-800 hover:bg-pink-900 rounded-md p-3 py-1 text-xl font-bold text-white mx-1'><MdEditNote /></button>
                  <button onClick={(e) => { handledelete(e, item.id) }} className='bg-pink-800 hover:bg-pink-900 rounded-md p-3 py-1 text-xl font-bold text-white mx-1'><MdDelete /></button>
                </div>

              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
