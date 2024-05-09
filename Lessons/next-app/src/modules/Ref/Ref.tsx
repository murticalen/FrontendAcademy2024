import { useEffect, useRef, useState } from 'react'

export const Ref = () => {
  const windowSizeRef = useRef<number>()
  const [size, setSize] = useState<number | undefined>(undefined)

  useEffect(() => {
    windowSizeRef.current = window.innerWidth

    const onResize = () => {
      console.log('Resizing')
      windowSizeRef.current = window.innerWidth
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div>Window size is: {windowSizeRef.current}</div>
  )
}
