import React, { memo } from 'react'

function Button({ handler, title }) {
  console.log('i am button Components')
  return (
    <div>
      <button onClick={handler}>{title}</button>
    </div>
  )
}

export default memo(Button)
