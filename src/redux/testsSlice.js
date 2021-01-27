import { createSlice } from "@reduxjs/toolkit";
import tests from "./tests";

const initialState = {
  tests: tests,
  allBalls: 0,
  currentQuestion: tests.basic[0],
  section: "basic"
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const right = action.payload;
      if (state.currentQuestion.answer === false) {
        right && (state.allBalls += 5)
      }
      state.currentQuestion.answer = true
    },
    nextQuestions: (state, action) => {
      const id = state.currentQuestion.id;
      const section = state.section
      state.currentQuestion = tests[section][id];
    },
    redirectQuestions: (state, action) => {
      const redirect = action.payload.redirect
      switch (redirect) {
        case 'Hooks':
          state.section = "hooks"
          state.currentQuestion = tests.hooks[0]
          break
        case 'Expert':
          state.section = "expert"
          state.currentQuestion = tests.expert[0]
          break
        case 'Basic':
          state.allBalls = 0
          state.section = "basic"
          state.currentQuestion = tests.basic[0]
          break
        default:
          state.currentQuestion = tests.basicReact[0]
      }
    }
  }
});

export const { answerQuestion, nextQuestions, redirectQuestions } = testsSlice.actions;

export const selectQuestion = (state) => state.tests.currentQuestion;
export const selectBalls = (state) => state.tests.allBalls;

export default testsSlice.reducer;
