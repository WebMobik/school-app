import { createSlice } from "@reduxjs/toolkit";
import tests from "./modifyTests";
import questionsByAnswers from "./giveQuestion";
import redirectQuestion from "./redirectQuestions";

const initialState = {
  tests,
  questionKey: "",
  currentQuestion: {},
  questionsByAnswers,
  questionId: 0,
  redirectQuestion,
  saveAnswers: [],
  allBalls: 0
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    nextQuestion: (state, action) => {
      const currentId = state.questionId;
      state.questionKey = Object.keys(tests)[currentId];
      state.currentQuestion = tests[state.questionKey];
      state.questionId++;
    },
    setRedirect: (state, action) => {
      state.currentQuestion = redirectQuestion[action.payload];
    },
    saveAnswer: (state, action) => {
      const answer = action.payload;
      state.saveAnswers.push(answer);
    },
    setAccessQuestion: (state, action) => {
      state.currentQuestion = tests[action.payload];
    }
  }
});

export const {
  saveAnswer,
  nextQuestion,
  setRedirect,
  setAccessQuestion
} = testsSlice.actions;

export const selectTests = (state) => state.tests.tests;
export const selectQuestion = (state) => state.tests.currentQuestion;
export const selectAccessQuestions = (state) => state.tests.questionsByAnswers;
export const selectSaveAnswers = (state) => state.tests.saveAnswers;
export const selectQuestionKey = (state) => state.tests.questionKey;
export const selectRedirectQuestions = (state) => state.tests.redirectQuestion;

export default testsSlice.reducer;
