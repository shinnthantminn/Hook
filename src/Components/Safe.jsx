import { useState } from 'react'

function Safe() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prv) => prv + 1)
      // safe ကတော့ Logically အလုပ်လုပ်စေပါတယ် deep dive သွားကြည့်ကြမယ် unsafe နဲ့ မတူပဲ iterator တိုင်းမှာ မှန်မှန်ကန်ကန်အလုပ်လုပ်ပါတယ် ပထမအချီမှာ prv ကို ၁ တိုးပါတယ် နောက်တစ်ကြိမ်မှာတိုးထားတဲ့ prv ကို ၁ တိုးပါတယ်ဒီလိုနဲ့ မှန်မှန်ကန်ကန်အလုပ်လုပ်ပါတယ်
    }
  }

  return (
    <div>
      <h1>i am Safe and count number are {count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Safe
