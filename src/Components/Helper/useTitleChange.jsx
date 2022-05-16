import { useEffect } from 'react'

function useTitleChange(counter) {
  useEffect(() => {
    document.title = `count is ${counter}`
  }, [counter])
}

export default useTitleChange
