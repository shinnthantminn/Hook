import React, { useReducer } from 'react'

let initialState = {
  counter1: 0,
  counter2: 1,
}

const countReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, counter1: state.counter1 + action.payload }
    case 'add2':
      return { ...state, counter2: state.counter2 + action.payload }
    default:
      return state
  }
}

function ComponentsTwo() {
  const [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div>
      <p>Count1:{state.counter1}</p>
      <p>Count2:{state.counter2}</p>
      <button
        onClick={() => {
          dispatch({ type: 'add', payload: 1 })
        }}
      >
        Click1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'add2', payload: 1 })
        }}
      >
        Click2
      </button>
    </div>
  )
}

export default ComponentsTwo
