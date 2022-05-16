import useCounter from './Helper/useCounter'

function ComponentsOne() {
  const [count, increase, decrease, reset] = useCounter()
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increase}>incrase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default ComponentsOne
