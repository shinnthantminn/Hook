import React, { useCallback, useMemo, useState } from 'react'

function TestIng() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const handleCount1 = () => {
    console.log('hello 1')
    setCount((pre) => pre + 1)
  }

  const handleCount2 = () => {
    console.log('Hello')
    setCount1((pre) => pre + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 200000000) i++
    console.log('hello i am')
    return count % 2 === 0
  }, [count])

  return (
    <div>
      <p>
        Count One is :{count} {isEven ? 'Even' : 'Odd'}
      </p>
      <button onClick={handleCount1}>Click 1</button>
      <p>Count Two is :{count1}</p>
      <button onClick={handleCount2}>Click 2</button>
    </div>
  )
}

export default TestIng

// useMemo နဲ့ useCallBack တို့ က အလုပ်လုပ်ပုံက အတူတူ ပါပဲ ဒါပေမဲ့ useMemo က ထွက်လာတဲ့ တန်ဖိုးကို ပဲ Cache လုပ်ပြီသိမ်းထားတာပါ
// useCallBack ကတော့ Function တစ်ခုလုံးကို Cache သိမ်းထားပေးပါတယ်
// သူတို့တွေကို Function ကြောင့် Runder ချတဲ့ Case တွေမှာ သိမ်းပါတယ် dep ပြောင်မှ သူတို့ကို အလုပ်လုပ်စေပါတယ်
