import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <>{time.toLocaleString()}</>
  )
}
