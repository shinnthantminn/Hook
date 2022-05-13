import { createContext, useReducer, useState } from 'react'
import ComponentsOne from './Components/ComponentsOne'
import ComponentsTwo from './Components/ComponentsTwo'

export const context = createContext()

let initialState = 0

const idReducers = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + action.payload
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(idReducers, initialState)
  const [state2, dispatch2] = useReducer(idReducers, initialState)

  return (
    <context.Provider value={{ state, dispatch, state2, dispatch2 }}>
      <ComponentsOne />
      <ComponentsTwo />
    </context.Provider>
  )
}

export default App
