import { createSlice } from "@reduxjs/toolkit";
import tests from "./tests";

const initialState = {
  tests,
  currentQuestion: tests[0],
  saveAnswers: [],
  currentAnswer: {},
  modalOpen: false,
  allBalls: 0,
  isFinal: false,
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    changeCurrentAnswer: (state, action) => {
      state.currentAnswer = action.payload
    },
    nextQuestion: (state) => {
      state.saveAnswers.push(state.currentAnswer)
      if(state.tests.length === state.saveAnswers.length) {
        const rightAnswers = state.saveAnswers.filter(answer => answer.right === true)
        state.allBalls = rightAnswers.length * 50
        state.currentAnswer = {}
        state.saveAnswers = []
        state.isFinal = true
      } else {
        const currentQuestionId = state.currentQuestion.id
        state.currentQuestion = state.tests[currentQuestionId]
      }
    },
    changeFinalState: (state) => {
      state.isFinal = false
    },
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    }
  }
});

export const { changeCurrentAnswer, nextQuestion, toggleModal, changeFinalState } = testsSlice.actions;

export const selectIsFinal = (state) => state.tests.isFinal;
export const selectAllBalls = (state) => state.tests.allBalls;
export const selectCurrentQuestion = (state) => state.tests.currentQuestion;
export const visibleModal = (state) => state.tests.modalOpen;

export default testsSlice.reducer;
