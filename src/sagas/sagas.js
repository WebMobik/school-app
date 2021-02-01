import { all, put, call, select, takeEvery } from "redux-saga/effects";
import { lockQuestion } from "../helpers/cutStrId";
import {
  saveAnswer,
  cutSaveAnswers,
  setRedirect,
  setRedirectQuestion,
  setAccessQuestion,
  selectRedirectQuestions,
  selectAccessQuestions,
  selectSaveAnswers
} from "../redux/testsSlice";

function* watchAnswer() {
  yield takeEvery("CHECK_ANSWER", checkAnswer);
}

function* checkAnswer({ payload }) {
  const answer = payload;
  if (!answer.value) {
    const redirectQuestions = yield select(selectRedirectQuestions);
    const findRedirect = Object.keys(redirectQuestions).find(
      (redirect) => +redirect.slice(-1) === answer
    );
    return yield put(setRedirect(findRedirect));
  }
  yield put(saveAnswer(answer));
  yield call(checkAccess, answer);
  return;
}

function* checkAccess(answer) {
  if (answer.redirect) {
    yield put(cutSaveAnswers(answer.redirect));
    yield put(setRedirectQuestion(answer.redirect));
  } else {
    const accessQuestions = yield select(selectAccessQuestions);
    const saveAnswers = yield select(selectSaveAnswers);
    const nextQuestionId = lockQuestion(accessQuestions, saveAnswers);
    yield put(setAccessQuestion(nextQuestionId));
  }
}

function* mySaga() {
  yield all([watchAnswer()]);
}

export default mySaga;
