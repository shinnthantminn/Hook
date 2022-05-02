import React from 'react'

export default class SetStateSecondParameter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(
      (pre) => {
        return {
          count: pre.count + 1,
        }
      },
      () => {
        console.log('this is setState callBack function', this.state.count)
        //ဒါကတော့ Class Components မှာပဲ ရပါတယ် setState မှာပါတဲ့ Callback Function ပါ ပြောင်းလည်းပြီသား state တန်ဖိုးကိုချက်ခြင်ပြန်ရအောင်လုပ်တာပါ
      },
    )
    console.log('that is too week', this.state.count)
  }

  render() {
    return (
      <div>
        <h1>Count value was {this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
