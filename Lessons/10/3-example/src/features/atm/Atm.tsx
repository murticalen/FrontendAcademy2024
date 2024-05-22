import { useMemo, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./atm.module.css"
import {
  depositTen,
  depositAmount,
  withdrawTen,
  withdrawAmount,
  selectBalance,
} from "./atmSlice"
import { useGetExchangeRatesQuery } from "../currencyPicker/currencyApiSlice"
import { selectCurrency } from "../currencyPicker/currencySlice"

export const Atm = () => {
  const dispatch = useAppDispatch()
  const balance = useAppSelector(selectBalance)
  const currency = useAppSelector(selectCurrency)

  const [depositValue, setDepositValue] = useState(15)
  const [withdrawValue, setWithdrawValue] = useState(15)

  const { data, isFetching } = useGetExchangeRatesQuery(currency)

  const convertedBalance = useMemo(() => {
    if (data) {
      const [currencyRates] = data
      const sellRate = parseFloat(
        currencyRates.prodajni_tecaj.replace(",", "."),
      )

      return sellRate * balance
    }

    return undefined
  }, [data, balance])

  return (
    <div className={styles.container}>
      <span className={styles.value}>Balance: {balance.toFixed(4)} EUR</span>
      <span className={styles.value}>
        Converted Balance:{" "}
        {isFetching ? (
          <span>Fetching...</span>
        ) : (
          <span>
            {convertedBalance!.toFixed(4)} {currency}
          </span>
        )}
      </span>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(depositTen())}
        >
          Deposit 10
        </button>

        <div className={styles.inputGroup}>
          <button
            className={styles.button}
            onClick={() => dispatch(depositAmount(depositValue))}
          >
            Deposit amount
          </button>
          <input
            className={styles.textbox}
            value={depositValue}
            type="number"
            onChange={e => {
              setDepositValue(+e.target.value)
            }}
          />
        </div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(withdrawTen())}
        >
          Withdraw 10
        </button>
        <div className={styles.inputGroup}>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(withdrawAmount(withdrawValue))
            }}
          >
            Withdraw amount
          </button>
          <input
            className={styles.textbox}
            value={withdrawValue}
            type="number"
            onChange={e => {
              setWithdrawValue(+e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}
