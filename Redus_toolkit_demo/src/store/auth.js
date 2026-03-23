import { createSlice } from "@reduxjs/toolkit";
const INITIAL_AUTH_STATE = { isAuthenticated: false };

const authenticationSlice = createSlice({
  name: "authentocation",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authenticationSlice.reducer;
export const authActions = authenticationSlice.actions;
