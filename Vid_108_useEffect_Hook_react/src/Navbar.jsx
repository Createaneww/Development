import React , {useEffect} from 'react'

const Navbar = (props) => {
    useEffect(() => {
        alert("Color was changed") 
    }, [props.color])
    
    useEffect(() => {
    alert("WELCOME TO MY PAGE!!!")
      return () => {
        alert("Component was unmounter")
      }
    }, [])
    
  return (
    <div>
      I am a Navbar of {props.color} color hehe....
    </div>
  )
}

export default Navbar
