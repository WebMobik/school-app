import { createSlice } from "@reduxjs/toolkit";
import tests from "./modifyTests";
import questionsByAnswers from "./giveQuestion";
import redirectQuestion from "./redirectQuestions";
import { cutStrId, getId } from "../helpers/cutStrId";

const initialState = {
  tests,
  questionKey: "",
  currentQuestion: tests[Object.keys(tests)[0]],
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
    setQuestionKey: (state, action) => {
      state.questionId = action.payload.questionId;
      state.currentQuestion = tests;
      state.questionKey = Object.keys(tests)[state.questionId];
    },
    setRedirect: (state, action) => {
      state.currentQuestion = redirectQuestion[action.payload];
    },
    setRedirectQuestion: (state, action) => {
      state.currentQuestion = state.tests[action.payload];
    },
    saveAnswer: (state, action) => {
      const answer = action.payload;
      state.saveAnswers.push(answer);
    },
    cutSaveAnswers: (state, action) => {
      const question = action.payload;
      // const indexAnswer = state.saveAnswers.findIndex((answer) => {
      //   return getId(answer.id) === getId(question);
      // });
    },
    setAccessQuestion: (state, action) => {
      const questionKey = action.payload;
      state.currentQuestion = tests[questionKey];
      const arrQuestion = tests[questionKey].title.split(" ");
      arrQuestion.forEach((str, index) => {
        if (cutStrId(str)) {
          const findSaveAnswer = state.saveAnswers.find(
            (answer) => answer.id === str
          );
          arrQuestion[index] = findSaveAnswer.value;
          state.currentQuestion = {
            ...state.currentQuestion,
            title: arrQuestion.join(" ")
          };
        }
      });
    }
  }
});

export const {
  saveAnswer,
  cutSaveAnswers,
  setQuestionKey,
  setAccessQuestion,
  setRedirect,
  setRedirectQuestion
} = testsSlice.actions;

export const selectTests = (state) => state.tests.tests;
export const selectQuestion = (state) => state.tests.currentQuestion;
export const selectAccessQuestions = (state) => state.tests.questionsByAnswers;
export const selectSaveAnswers = (state) => state.tests.saveAnswers;
export const selectQuestionKey = (state) => state.tests.questionKey;
export const selectRedirectQuestions = (state) => state.tests.redirectQuestion;

export default testsSlice.reducer;
