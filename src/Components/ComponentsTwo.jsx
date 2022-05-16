import useCounter from './Helper/useCounter'

function ComponentsTwo() {
  const [count, increase, decrease, reset] = useCounter(15, 5)
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increase}>incrase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default ComponentsTwo
