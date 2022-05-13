import React, { useContext } from 'react'
import { context } from '../App'

function ComponentsOne() {
  const state = useContext(context)
  console.log(state.dispatch)
  return (
    <div>
      <p>{state.state}</p>
      <button
        onClick={() => {
          state.dispatch({ type: 'add', payload: 1 })
        }}
      >
        click in ComponentsOne
      </button>
    </div>
  )
}

export default ComponentsOne
