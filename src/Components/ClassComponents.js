import React, { Component } from 'react'

export default class ClassComponents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'mg mg',
      age: 19,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log('hello i am components mount')
  } // Components တစ်ခု စတင်တည်ဆောက်တဲ့အခါမှာ တစ်ခါပဲ အလုပ်လုပ်ပါတယ်

  componentDidUpdate(preProps, preState) {
    // if (preState.name !== this.state.name) {
    //   console.log('hello i am components update depend by variable')
    // }
    console.log('hello i am components update')
  } // Components Update လုပ်တိုင်းအလုပ်လုပ်ပါတယ်

  componentWillUnmount() {
    console.log('hello i am components unmount')
  } // Components တစ်ခု DOM ကနေဖြုတ်တဲ့ အခါမှာ တစ်ခါပဲ အလုပ်လုပ်ပါတယ်

  handleClick = () => {
    this.setState({
      name: 'Aye Aye',
      age: 10,
    })
  }

  render() {
    return (
      <div>
        <h1>this do name {this.state.name}</h1>
        <h1>this do age {this.state.age}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

// တစ်ခါပဲ အလုပ်လုပ်စေခြင်ရင် => componentWillUnmount => componentDidMount
// အကြိမ်ကြိမ်အခါအခါ အလုပ်လုပ်စေခြင်ရင် တော့ => componentDidUpdate
// variable တစ်ခုပေါ်မူတီပြီ အကြိမ်ကြိမ်အခါအခါ အလုပ်လုပ်စေခြင်ရင်တော့ => componentDidUpdate with preState and preProps permeter
