import {
  all,
  put,
  takeEvery
} from "redux-saga/effects";
import { answerQuestion, nextQuestions, redirectQuestions } from "../redux/testsSlice";

function* watchQuestion() {
  yield takeEvery("ANSWER_QUESTION", giveQuestion);
}

function* giveQuestion(action) {
  const variant = action.payload
  if (variant.redirect !== undefined) {
    yield put(redirectQuestions(variant))
    return;
  }
  yield put(answerQuestion(variant.right));
}

function* watchNextQuestion() {
  yield takeEvery("NEXT_QUESTIONS", nextQuestion);
}

function* nextQuestion() {
  yield put(nextQuestions());
}

function* mySaga() {
  yield all([watchQuestion(), watchNextQuestion()]);
}

export default mySaga;
