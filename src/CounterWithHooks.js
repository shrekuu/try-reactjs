import React, { useState, createContext, useContext } from 'react'

function useCounter () {
  let [count, setCount] = useState(0)
  let increment = () => setCount(count + 1)
  let decrement = () => setCount(count - 1)
  return {count, decrement, increment }
}

let Counter = createContext(null)

function CounterDisplay () {
  let counter = useContext(Counter)
  return (
    <div>
      <div>counter with hooks</div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

function CounterWithHooks () {
  let counter = useCounter()
  return (
    <Counter.Provider value={counter}>
      <CounterDisplay/>
      <CounterDisplay/>
    </Counter.Provider>
  )
}

export default CounterWithHooks