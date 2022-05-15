import React, { Component } from 'react'

export default class ClassTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  increase = () => {
    this.setState((pre) => {
      return {
        count: pre.count + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increase}>Click</button>
      </div>
    )
  }
}
