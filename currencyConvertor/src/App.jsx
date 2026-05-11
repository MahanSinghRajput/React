import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const swap = () => {
    setFrom(prevFrom => {
      setTo(prevFrom)
      return to
    })
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>
        <Input
          label="From"
          amount={amount}
          onAmountChange={(am) => setAmount(am)}
          currencyOptions={options}
          onCurrencyChange={(curr) => setFrom(curr)}
          selectCurrency={from}
        />

        <button type="button" onClick={swap}>swap</button>

        <Input
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(curr) => setTo(curr)}
          selectCurrency={to}
          amountDisable
        />

        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  )
}

export default App