import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , multiply } from './Counterslice'
import Navbar from './Navbar2'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <Navbar/>
      <div className='container'>
        
     <h1>Hello React Redux</h1>
        <button className='btn btn-primary'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='fs-1 p-3'>{count}</span>
        <button className='btn btn-primary'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button className='btn btn-primary'
          aria-label="Decrement value"
          onClick={() => dispatch(multiply())}
        >
          Multiply
        </button>
      </div>
    </div>
  )
}
