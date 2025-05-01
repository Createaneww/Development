import React from 'react'
import { useContext } from 'react'
import { counterContetx } from '../context/context'
const Component1 = () => {
    const value = useContext(counterContetx)
  return (
    <div>
  {value.count}
    </div>
  )
}

export default Component1
