import { useState } from 'react'
import { useResize } from '../hooks/useResize'

export const Resizeable = () => {
  const [counter, setCounter] = useState(0)

  useResize(() => setCounter(v => v + 1), [])

  return (
    <div>Called setCounter on window resize {counter} times</div>
  )
}
