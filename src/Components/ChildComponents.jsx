import React, { useState, forwardRef, useImperativeHandle } from 'react'

const ChildComponents = forwardRef((prosp, ref) => {
  const [count, setCount] = useState(0)

  const increse = () => {
    setCount((pre) => pre + 1)
  }

  useImperativeHandle(ref /* ကို ပြန်ပေးမဲ့ကောင် */, () => {
    return {
      increse, // object return ပေးပြီး ပိုခြင်တဲ့ကောင်တွေကို ထည့်ပို့လို့ရပါတယ်
    }
  }) // [] dependencies array တည်ဆောက်ပြီ state တစ်ခုအပြောင်အလည်းထည့်ထားလို့ရပါတယ်

  return (
    <div>
      <p>count is :{count}</p>
      <button onClick={increse}>Increase</button>
    </div>
  )
})

export default ChildComponents

// class components မှာ ဆိုလို့ရှိရင် ref က parent to Child / child to parents ပေးလို့ရပါတယ်
// function မှာ ကြတော့ forwardRef ကို သုံးရပါတယ်
// useImperativeHandle က child components ထဲ က Function,method တွေ props,state တွေကို paranets ရဲ့  ref current စီကို import ပေးလို့ရပါတယ်
