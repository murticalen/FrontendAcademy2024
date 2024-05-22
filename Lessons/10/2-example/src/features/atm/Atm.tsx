import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./atm.module.css"
import {
  depositTen,
  depositAmount,
  withdrawTen,
  withdrawAmount,
  selectBalance,
  convertToUSD,
  selectConvertedBalance,
} from "./atmSlice"

export const Atm = () => {
  const dispatch = useAppDispatch()
  const balance = useAppSelector(selectBalance)
  const convertedBalance = useAppSelector(selectConvertedBalance)

  const [depositValue, setDepositValue] = useState(15)
  const [withdrawValue, setWithdrawValue] = useState(15)

  return (
    <div>
      <span className={styles.value}>Balance: {balance.toFixed(4)} EUR</span>

      <span className={styles.value}>
        Converted Balance:{" "}
        {convertedBalance ? `${convertedBalance.toFixed(4)} USD` : "?"}
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
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(convertToUSD())}
        >
          Convert to USD
        </button>
      </div>
    </div>
  )
}
