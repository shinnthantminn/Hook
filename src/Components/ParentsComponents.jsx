import React, { useRef } from 'react'
import ChildComponents from './ChildComponents'

function ParentsComponents() {
  const Refer = useRef()

  const hendleRef = () => {
    Refer.current.increse()
  }

  return (
    <div>
      <ChildComponents ref={Refer} />
      <button onClick={hendleRef}>Paraent Click</button>
    </div>
  )
}

export default ParentsComponents
