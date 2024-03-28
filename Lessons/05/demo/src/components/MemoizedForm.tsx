import { useMemo, useState } from 'react'

const isPrime = (num: number) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false
  }
  return num > 1
}

export const MemoizedForm = () => {

  const [enteredNumber, setEnteredNumber] = useState(0)
  const [length, setLength] = useState(0)

  const numbersCount = useMemo(() => {
    let total = 0
    for (let i = 0; i < enteredNumber; i++) {
      if (isPrime(i)) {
        total++
      }
    }
    return total
  }, [enteredNumber])

  return (
    <div style={{ margin: '12px', fontSize: '12px' }}>
      <div style={{ fontSize: '16px', marginTop: '8px' }}>Memoized form:</div>
      <form>
        <label htmlFor='number-form'></label>
        <input id='number-form' type='number' onChange={(e) => {
          const vAsNumber = Number(e.currentTarget.value)
          if (Number.isNaN(vAsNumber)) {
            setEnteredNumber(0)
          } else {
            setEnteredNumber(vAsNumber)
          }
        }}></input>
        <input type='text' onChange={(e) => setLength(e.currentTarget.value.length)}></input>
      </form>
      <div>There is {numbersCount} smaller primes</div>
      <div>Text length is {length}</div>
    </div>
  )
}
