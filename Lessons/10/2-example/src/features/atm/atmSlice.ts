import { type PayloadAction } from "@reduxjs/toolkit"

import { fetchExchangeRates } from "./atmApi"
import { createAppSlice } from "../../app/createAppSlice"

export interface CounterSliceState {
  balance: number
  convertedBalance: number | undefined
  status: "idle" | "loading" | "failed"
}

const initialState: CounterSliceState = {
  balance: 0,
  convertedBalance: undefined,
  status: "idle",
}

export const atmSlice = createAppSlice({
  name: "atm",
  initialState,
  reducers: create => ({
    depositTen: create.reducer(state => {
      state.balance += 10
    }),
    depositAmount: create.reducer((state, action: PayloadAction<number>) => {
      state.balance += action.payload
    }),
    withdrawTen: create.reducer(state => {
      if (state.balance >= 10) {
        state.balance -= 10
      }
    }),
    withdrawAmount: create.reducer((state, action: PayloadAction<number>) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload
      }
    }),
    convertToUSD: create.asyncThunk(
      async () => {
        const response = await fetchExchangeRates()
        const rate = response.find(r => r.valuta === "USD")!.kupovni_tecaj

        return parseFloat(rate.replace(",", "."))
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.convertedBalance = state.balance * action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),
  selectors: {
    selectBalance: atm => atm.balance,
    selectConvertedBalance: atm => atm.convertedBalance,
  },
})

export const {
  depositTen,
  depositAmount,
  withdrawTen,
  withdrawAmount,
  convertToUSD,
} = atmSlice.actions

export const { selectBalance, selectConvertedBalance } = atmSlice.selectors
