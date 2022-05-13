import React, { useEffect, useState } from 'react'

function Testing() {
  const fetching = async () => {
    const res = await fetch(`https://randomuser.me/api/`)
    const result = await res.json()
    console.log(result)
  }

  const [state, setState] = useState(0)

  useEffect(() => {
    fetching()
  }, [])

  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((pre) => pre + 1)
        }}
      >
        click
      </button>
    </div>
  )
}

export default Testing
