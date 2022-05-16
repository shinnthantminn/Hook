import { useState } from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const reset = () => {
    setValue(initialValue)
  }

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    },
  }

  return [value, reset, bind]
}

export default useInput

// တကယ်မိုက်တဲ့ Custom Hook ပါ ကြည်လိုက်တာနဲ့နားလည်လို့ မရှင်တော့ပါဘူး
