import { createSlice } from "@reduxjs/toolkit";
import tests from "./tests";

const initialState = {
  tests,
  currentQuestion: tests[0],
  saveAnswers: [],
  allBalls: 0,
  modalOpen: false
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    giveAnswer: (state, action) => {
      const { question, variant, id } = action.payload;
      state.saveAnswers.push(question);
      variant.right && (state.allBalls += 50);
      state.currentQuestion = state.tests[id];
    },
    toggleModal: (state) => {
      state.modalOpen = !state.modalOpen;
    }
  }
});

export const { giveAnswer, toggleModal } = testsSlice.actions;

export const selectCurrentQuestion = (state) => state.tests.currentQuestion;
export const visibleModal = (state) => state.tests.modalOpen;

export default testsSlice.reducer;
