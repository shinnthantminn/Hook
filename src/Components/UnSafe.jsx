import { useState } from 'react'

function UnSafe() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    for (let i = 0; i < 10; i++) {
      setCount(count + 1)
      // unsafe ကြတော့ Logically အရ အလုပ်လုပုံကိုသွေဖယ်သွားပါတယ် Deep dive ရှင်းပြရမယ် ဆိုရင် Count ကို + ၁ တိုးရင် အမှန် တစ်ခါ Click နိပ်တိုင်း ၁ တိုးပြီး ၁၀ ရရမှာ ပါ ဒါ က Logically မရပါ ဒါပေမဲ့ Count ကို ပဲ အမြဲ ၁ တိုးနေသလိုပါပဲ count က ၀ ပဲရှိတဲ့ အတွက် ၀ + ၁ က iterator တိုင်မှာ ကို ဒီ အတိုင်းသွားနေတဲ့ အတွက် အဖြေက ၁ ပဲရမှာပါ
    }
  }

  return (
    <div>
      <h1>i am unSafe and count number are {count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UnSafe
