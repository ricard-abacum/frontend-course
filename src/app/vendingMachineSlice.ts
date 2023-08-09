import { IProductSlot, IUser } from "./../utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VendingMachineState {
  name: string | null;
  surname: string | null;
  balance: number | null;
  products: Array<IProductSlot>;
}

const initialState: VendingMachineState = {
  name: "",
  surname: "",
  balance: 0,
  products: [],
};

export const vendingMachineSlice = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    updateBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<IUser>) => {
      state.name = action.payload.user.name;
      state.surname = action.payload.user.surname;
      state.balance = action.payload.balance;
    },
    setProducts: (state, action: PayloadAction<Array<IProductSlot>>) => {
      state.products = action.payload;
    },
  },
});

export const { updateBalance, updateUserInfo, setProducts } =
  vendingMachineSlice.actions;

export default vendingMachineSlice.reducer;
