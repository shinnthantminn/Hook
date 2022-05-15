import React, { memo } from 'react'

function Text({ text }) {
  console.log('i am text Components')
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default memo(Text)
