import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Parth")
  const [form, setForm] = useState({email: "" , phone: ""})


  const handclick = () => {
    alert("Hey i am clicked")
  }
  const handleover = () => {
    alert("I am a mouse over")
  }
  const handlechange = (e) => {
    // setname(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form);
    
    
}

  return (
    <>
      <div className="btn">
        <button onClick={handclick}>click me</button>
      </div>

      <div className="red bg-red-500 w-[233px] h-[233px]" onMouseOver={handleover}>
        i am red
      </div>
      {/* <input type="text" value={name} onChange={handlechange} /> */}

      
      <input type="text" name='email' value={form.email?form.email:""} onChange={handlechange} />
      <input type="text" name='phone' value={form.phone?form.email:""} onChange={handlechange} />
    </>
  )
}

export default App
