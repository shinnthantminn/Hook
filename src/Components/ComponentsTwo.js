import React from 'react'
import { context } from '../App'

function ComponentsTwo() {
  return (
    <context.Consumer>
      {(value) => (
        <div>
          <h1>{value.state2}</h1>
          <button
            onClick={() => {
              value.dispatch2({ type: 'add', payload: 2 })
            }}
          >
            click in Components2
          </button>
        </div>
      )}
    </context.Consumer>
  )
}

export default ComponentsTwo
