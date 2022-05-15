import React, { memo } from 'react'

function Title() {
  console.log('i am Title Components')
  return (
    <div>
      <h1>React Mamo And useCallback</h1>
    </div>
  )
}

export default memo(Title)
