import { createSlice, configureStore } from "@reduxjs/toolkit";
const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true };
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

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authenticationSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
export default store;
