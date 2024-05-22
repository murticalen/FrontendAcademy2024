import type { ChangeEvent } from "react"

import { useAppDispatch } from "../../app/hooks"
import styles from "./currencyPicker.module.css"

import { supportedCurrencies, type Currency } from "./currencyApiSlice"
import { setCurrency } from "./currencySlice"

export const CurrencyPicker = () => {
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(e.target.value as Currency))
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.inputGroup}>
          <span>Currency: </span>
          <select className={styles.select} onChange={handleChange}>
            {supportedCurrencies.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
