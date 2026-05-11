import React, {useId} from 'react'

function Input({label,amount,onAmountChange,onCurrencyChange,currencyOptions = [], selectCurrency = "usd", amountDisable = false, currencyDisable = false}) {
    const amountInputId = useId()
  return (
    <div>
        <div>
            <label htmlFor={amountInputId}>{label}</label>
            <input id={amountInputId} type="number" placeholder = "Amount" disabled = {amountDisable} value = {amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value) || 0)} />
        </div>
        <div>
            <p>Currency Type</p>
            <select value = {selectCurrency} onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled = {currencyDisable}>
                {currencyOptions.map((curr) => (
                    <option key={curr} value = {curr}>{curr}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Input