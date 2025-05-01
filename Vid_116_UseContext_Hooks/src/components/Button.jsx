import React , {useContext} from 'react'
import Component1 from './Component1'
import { counterContetx } from '../context/context'
const Button = () => {
const value = useContext(counterContetx)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}> <span><Component1/></span>Button hu mai</button> 
    </div>
  )
}

export default Button
 