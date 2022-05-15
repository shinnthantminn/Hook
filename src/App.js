import { useCallback, useState } from 'react'
import rug from 'random-username-generator'
import Title from './Components/Title'
import Text from './Components/Text'
import Button from './Components/Button'

function App() {
  const [name, setName] = useState('mg mg')
  const [count, setCount] = useState(0)

  const changeName = useCallback(() => {
    setName(rug.generate)
  }, [name]) // array ထဲမှာ empty ထားရင် buttom components ကို ထက်ပြီးတော့ render လုပ်တော့မှာ မဟုတ်ပါဘူး name ပြောင်သွားရင် သူ့ကို prop အနေနဲ့ထည့်ထားတဲ့ Components က အလုပ်လုပ်သွားမှာပါ

  const changeCount = useCallback(() => {
    setCount((pre) => pre + 1)
  }, [count])

  return (
    <>
      <Title />
      <Text text={`Name is :${name}`} />
      <Button handler={changeName} title="Change Name" />
      <Text text={`Name is :${count}`} />
      <Button handler={changeCount} title="Change count" />
    </>
  )
}

export default App

// memo ကတော့ သူ Components ထဲမှာ State ပြောင်တာပဲဖြစ်ဖြစ် props ပြောင်တာပဲဖြစ်ဖြစ် အဲ့ ကြမှ render ချပါတယ်
// button ကို နိပ်လိုက်ရင် function နှစ်ခုလုံ ကို ဖန်တီရပါတယ် ဒါကြောင်မို့လို့ Render က Button နှစ်ခု စာလုပ်ပါတယ် Use CallBack သုံးလိုက်ရင် Array depen အရ dep ပြောင်လည်းတော့မှ သူတို့က အလုပ်လုပ်မှာဖြစ်ပါတယ် Performance အတွက်အရမ်းကောင်းပါတယ်
