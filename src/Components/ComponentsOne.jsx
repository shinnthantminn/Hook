import React, { useState } from 'react'
import useTitleChange from './Helper/useTitleChange'

function ComponentsOne() {
  const [count, setCount] = useState(0)
  useTitleChange(count)
  const handleCount = () => {
    setCount((pre) => pre + 1)
  }
  return (
    <div>
      <button onClick={handleCount}>Click</button>
    </div>
  )
}

export default ComponentsOne
