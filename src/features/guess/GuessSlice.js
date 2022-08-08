import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastGuess: "none",
  upperBound: 10,
  lowerBound: 1,
};
const GuessSlice = createSlice({
  name: "guess",
  initialState,
  reducers: {
    setGuess: {
      reducer(state, action) {
        state.lastGuess = action.payload;
      },
      prepare(lastGuess) {
        return {
          payload: lastGuess,
        };
      },
    },
    setLowerBound: {
      reducer(state, action) {
        state.lowerBound = parseInt(action.payload);
      },
      prepare(lowerBound) {
        return {
          payload: lowerBound,
        };
      },
    },
    setUpperBound: {
      reducer(state, action) {
        state.upperBound = parseInt(action.payload);
      },
      prepare(upperBound) {
        return {
          payload: upperBound,
        };
      },
    },
  },
});

export const getLastGuess = (state) => state.guess.lastGuess;
export const getLowerBound = (state) => state.guess.lowerBound;
export const getUppwerBound = (state) => state.guess.upperBound;

export const { setGuess, setLowerBound, setUpperBound } = GuessSlice.actions;

export default GuessSlice.reducer;
