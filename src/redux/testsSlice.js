import { createSlice } from "@reduxjs/toolkit";
import tests from "./tests";

const initialState = {
  tests,
  currentQuestion: tests[0],
  saveAnswers: [],
  allBalls: 0
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    giveAnswer: (state, action) => {
      const {question, variant, id} = action.payload
      state.saveAnswers.push(question)
      variant.right && (state.allBalls += 50)
      state.currentQuestion = state.tests[id]
    },
  }
});

export const { giveAnswer } = testsSlice.actions;

export const selectCurrentQuestion = (state) => state.tests.currentQuestion

export default testsSlice.reducer;
