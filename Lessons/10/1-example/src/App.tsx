import "./App.css"
import { Atm } from "./features/atm/Atm"

import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Atm />
      </header>
    </div>
  )
}

export default App
