import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, RootState } from '@/store/index'
import { asyncAddNumber } from '@/store/counter/thunk'

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.n)
  const dispatch = useDispatch<Dispatch>()
  return (
    <div
      onClick={() => dispatch(asyncAddNumber(1))}
      className="btn text-center text-white bg-green-500 shadow-xl shadow-green-500/50 py-2 rounded-full w-32"
    >
      Counter - {counter}
    </div>
  )
}

export default Counter
