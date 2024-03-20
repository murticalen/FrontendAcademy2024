import { PropsWithChildren, useState } from 'react'

function Button({ isActive, onClick, children }: PropsWithChildren<{ isActive?: boolean; onClick: () => void; }>) {
  return (
    <button onClick={onClick} style={{ color: isActive ? 'red' : 'darkgreen' }}>{children}</button>
  )
}

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [activeButton, setActiveButton] = useState<'-' | '+' | undefined>(undefined)

  return (
    <div style={{ fontSize: '20px', marginTop: '16px' }}>
      <Button
        isActive={activeButton === '-'}
        onClick={() => {
          setCounter(v => v - 1)
          setActiveButton('-')
        }}>
        -
      </Button>
      <div style={{ margin: '0 8px' }}>{counter}</div>
      <Button
        isActive={activeButton === '+'}
        onClick={() => {
          setCounter(v => v + 1)
          setActiveButton('+')
        }}>
        +
      </Button>
    </div>
  )
}
