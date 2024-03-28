import { useState } from 'react'

const DEFAULT = ['Hello', 'Again', 'from', 'Sofascore', 'Academy']

const Element = ({ value }: { value: string }) => {

  const [counter, setCounter] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <div>{value}</div>
      <button onClick={() => setCounter(v => v + 1)}>+</button>
    </div>
  )

}

export const List = () => {
  const [elements, setElements] = useState(DEFAULT)

  console.log(elements)

  return (
    <div style={{ marginTop: '16px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        {elements.map((v: string) => {
          return (
            <Element key={v} value={v} />
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginTop: '8px' }}>
        <button onClick={() => setElements([...elements].sort())}>SORT</button>
        <button onClick={() => setElements(DEFAULT)}>DEFAULT</button>
      </div>
    </div>
  )
}
