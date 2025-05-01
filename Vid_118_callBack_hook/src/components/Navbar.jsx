import React from 'react'
import { memo } from 'react';

const Navbar = (props) => {
    console.log("Navbar is rendered");
    
  return (
    <div>
      I am a {props.Superb}  Navbar

      <button onClick={()=>{props.getSuperb()}}>Click me</button>
    </div>
  )
}

export default memo(Navbar)
