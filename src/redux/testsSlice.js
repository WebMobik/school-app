import { createSlice } from "@reduxjs/toolkit";
import tests from "./tests";

const initialState = {
  tests,
  currentQuestion: tests[0],
  saveAnswers: [],
  modalOpen: false,
  allBalls: 0,
  isFinal: false,
  isUserAuth: false,
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    nextQuestion: (state, action) => {
      const currentAnswer = action.payload
      state.saveAnswers.push(currentAnswer)
      if(state.tests.length === state.saveAnswers.length) {
        const rightAnswers = state.saveAnswers.filter(answer => answer.right === true)
        state.allBalls = rightAnswers.length * 50
        state.saveAnswers = []
        state.isFinal = true
      } else {
        const currentQuestionId = state.currentQuestion.id
        state.currentQuestion = state.tests[currentQuestionId]
      }
    },
    changeFinalState: (state) => {
      state.currentQuestion = state.tests[0]
      state.isFinal = false
    },
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    toggleUserAuthenticate: (state) => {
      state.isUserAuth = !state.isUserAuth;
    },
  }
});

export const { nextQuestion, toggleModal, changeFinalState, toggleUserAuthenticate } = testsSlice.actions;

export const selectIsFinal = (state) => state.tests.isFinal;
export const selectAllBalls = (state) => state.tests.allBalls;
export const selectCurrentQuestion = (state) => state.tests.currentQuestion;
export const selectIsUserAuth = (state) => state.tests.isUserAuth;
export const visibleModal = (state) => state.tests.modalOpen;

export default testsSlice.reducer;
