import { configureStore } from "@reduxjs/toolkit";
import guessReducer from "../features/guess/GuessSlice";

export const store = configureStore({
  reducer: {
    guess: guessReducer,
  },
});
