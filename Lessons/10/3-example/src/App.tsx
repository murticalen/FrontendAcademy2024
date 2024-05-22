import "./App.css"
import { Atm } from "./features/atm/Atm"
import { CurrencyPicker } from "./features/currencyPicker/CurrencyPicker"

import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CurrencyPicker />
      </header>
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <Atm />
      </main>
    </div>
  )
}

export default App
