import { useState } from 'react'

function useCounter(initialValue = 0, amount = 1) {
  const [count, setCount] = useState(initialValue)
  const increase = () => {
    setCount((pre) => pre + amount)
  }
  const decrease = () => {
    setCount((pre) => pre - amount)
  }
  const reset = () => {
    setCount(initialValue)
  }
  return [count, increase, decrease, reset]
}

export default useCounter
