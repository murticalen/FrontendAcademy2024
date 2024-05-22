import { type PayloadAction } from "@reduxjs/toolkit"

import { createAppSlice } from "../../app/createAppSlice"
import type { Currency } from "./currencyApiSlice"

export interface CurrencyPickerSlice {
  currency: Currency
}

const initialState: CurrencyPickerSlice = {
  currency: "AUD",
}

export const currencyPickerSlice = createAppSlice({
  name: "currencyPicker",
  initialState,
  reducers: create => ({
    setCurrency: create.reducer((state, action: PayloadAction<Currency>) => {
      state.currency = action.payload
    }),
  }),
  selectors: {
    selectCurrency: currencyPicker => currencyPicker.currency,
  },
})

export const { setCurrency } = currencyPickerSlice.actions

export const { selectCurrency } = currencyPickerSlice.selectors
