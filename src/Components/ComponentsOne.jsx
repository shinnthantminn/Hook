import React, { useReducer } from 'react'

let initialState = 0

const countReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + action.payload
    default:
      return state
  }
}

function ComponentsOne() {
  const [state1, dispatch1] = useReducer(countReducer, initialState)
  const [state2, dispatch2] = useReducer(countReducer, initialState)

  return (
    <div>
      <p>Count1:{state1}</p>
      <p>Count1:{state2}</p>
      <button
        onClick={() => {
          dispatch1({ type: 'add', payload: 1 })
        }}
      >
        Click1
      </button>
      <button
        onClick={() => {
          dispatch2({ type: 'add', payload: 1 })
        }}
      >
        Click2
      </button>
    </div>
  )
}

export default ComponentsOne
