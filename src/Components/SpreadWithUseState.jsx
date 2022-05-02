const { useState } = require('react')

function SpreadWithUseState() {
  const [person, setPerson] = useState({
    name: 'mg mg',
    age: 10,
  })

  const [arr, setArr] = useState([])

  const handleClick = () => {
    setArr([...arr, { id: Math.floor(Math.random() * 20000) + 1 }])
    console.log('this is numCallback', arr)
  }

  return (
    <div>
      <p>{JSON.stringify(person)}</p>
      <input
        type="text"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <br /> <br />
      <input
        type="text"
        value={person.age}
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      />
      <p>{JSON.stringify(arr)}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default SpreadWithUseState
