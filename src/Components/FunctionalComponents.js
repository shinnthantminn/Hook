import { useEffect, useState } from 'react'

function FunctionalComponents() {
  const [state, setState] = useState({
    name: 'mg mg',
    age: 10,
  })

  useEffect(() => {
    console.log('i has empty dependencies')
  }, []) //mount unmount

  useEffect(() => {
    console.log('i have state dependencies')
  }, [state.name]) //update with dependencies

  useEffect(() => {
    console.log('i has non')
  }) //update EveryTime

  const handleSubmit = () => {
    setState({
      ...state,
      name: 'aye aye',
    })
  }

  const handleAge = () => {
    setState({
      ...state,
      age: 20,
    })
  }
  return (
    <div>
      <h1>name:{state.name}</h1>
      <h1>age:{state.age}</h1>
      <button onClick={handleSubmit}>Click</button>
      <button onClick={handleAge}>age Change</button>
    </div>
  )
}

export default FunctionalComponents
