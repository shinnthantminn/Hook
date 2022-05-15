import React, { Component, createRef } from 'react'
import ClassTwo from './ClassTwo'

export default class ClassOne extends Component {
  countRef = createRef()

  render() {
    return (
      <div>
        <ClassTwo ref={this.countRef} />
        <button
          onClick={() => {
            this.countRef.current.increase()
          }}
        >
          Click Parents
        </button>
      </div>
    )
  }
}
