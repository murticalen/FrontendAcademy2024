import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { AppThunk } from "../../app/store"

export interface CounterSliceState {
  balance: number
}

const initialState: CounterSliceState = {
  balance: 0,
}

export const atmSlice = createSlice({
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
  }),
  selectors: {
    selectBalance: atm => atm.balance,
  },
})

export const { depositTen, depositAmount, withdrawTen, withdrawAmount } =
  atmSlice.actions

export const { selectBalance } = atmSlice.selectors
