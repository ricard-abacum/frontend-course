import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VendingMachineState {
  name: string | null;
  surname: string | null;
  balance: number | null;
}

const initialState: VendingMachineState = {
  name: "",
  surname: "",
  balance: 0,
};

export const vendingMachineSlice = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    updateBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<VendingMachineState>) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.balance = action.payload.balance;
    },
  },
});

export const { updateBalance, updateUserInfo } = vendingMachineSlice.actions;

export default vendingMachineSlice.reducer;
