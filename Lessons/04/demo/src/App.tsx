import { useState } from 'react'
import './App.css'
import { Clock } from './Clock'
import { Counter } from './Counter'
import { Fetch } from './Fetch'
import { HelloWorld } from './HelloWorld'
import { List } from './List'

function App() {

  const times = 5
  const [showClock, setShowClock] = useState(false)

  return (
    <>
      <HelloWorld color='orange' transform='uppercase' times={times}>
        <div>Bla bla bla</div>
        <div>Test test test</div>
      </HelloWorld>
      <Counter />
      <Counter />
      <Fetch />
      <div style={{ cursor: 'pointer' }}
           onClick={() => setShowClock(v => !v)}>{showClock ? 'HIDE CLOCK' : 'SHOW CLOCK'}</div>
      {showClock && <Clock />}
      <List />
    </>
  )
}

export default App
