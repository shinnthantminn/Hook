import { useEffect, useRef, useState } from 'react'

function Usefull() {
  const [time, setTime] = useState(0)
  const TimeInterval = useRef()

  useEffect(() => {
    TimeInterval.current = setInterval(() => {
      setTime((pre) => pre + 1)
    }, 1000)
    return () => {
      clearInterval(TimeInterval.current)
    }
  }, [])

  return (
    <div>
      <p>Time Was {time}</p>
      <button
        onClick={() => {
          clearInterval(TimeInterval.current)
        }}
      >
        Click
      </button>
    </div>
  )
}

export default Usefull

// UseRef ကို သုံပြီကိုယ်ထည့်ခြင်တဲ့ Value တွေကို Global single variable လို သတ်မှတ်လို့ရပါတယ်
