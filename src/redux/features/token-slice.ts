import { clearStorage, getStorage, saveStorage } from "../../utils";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TokenState {
  accessToken: string;
}

const initialState: TokenState = {
  accessToken: getStorage("accessToken") || "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      saveStorage("accessToken", action.payload);
    },
    clearToken: (state) => {
      state.accessToken = "";
      clearStorage("accessToken");
    },
  },
});

export const { clearToken, saveToken } = tokenSlice.actions;
export default tokenSlice.reducer;
