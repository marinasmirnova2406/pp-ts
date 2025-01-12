import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user: null | string;
    token: null | string;
    status: string;
  }

const initialState: AuthState = {
    user: null,
    token: null,
    status: "idle"
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
});

export const {  } = authSlice.actions;
export default authSlice.reducer;
