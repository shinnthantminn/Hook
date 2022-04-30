import Safe from './Components/Safe.jsx'
import UnSafe from './Components/UnSafe.jsx'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>useState Hook safe and unsafe</h1>
      <Safe />
      <UnSafe />
    </div>
  )
}

export default App
