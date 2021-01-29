import { all, put, call, select, takeEvery } from "redux-saga/effects";
import {
  saveAnswer,
  nextQuestion,
  setRedirect,
  setAccessQuestion,
  selectRedirectQuestions,
  selectAccessQuestions,
  selectSaveAnswers,
  selectTests
} from "../redux/testsSlice";

function* watchAnswer() {
  yield takeEvery("CHECK_ANSWER", checkAnswer);
}

function* checkAnswer({ payload }) {
  const answer = payload;
  if (answer.value) {
    yield put(saveAnswer(answer));
    yield call(checkAccess, answer);
    return;
  }
  const redirectQuestions = yield select(selectRedirectQuestions);
  console.log(redirectQuestions);
  const findRedirect = Object.keys(redirectQuestions).find((redirect) =>
    redirect.indexOf(answer)
  );
  return yield put(setRedirect(findRedirect));
}

function* checkAccess() {
  const accessQuestions = yield select(selectAccessQuestions);
  const saveAnswers = yield select(selectSaveAnswers);
  const nextQuestionId = lockQuestion(accessQuestions, saveAnswers);
  yield put(setAccessQuestion(nextQuestionId));
}

function lockQuestion(trueQuestion, saveAnswers, go = 0) {
  const newArr = [];
  for (let i = 0; i < trueQuestion.length; i++) {
    if (trueQuestion[i].value.length === go) {
      newArr.push(trueQuestion[i]);
    }
    for (let j = 0; j < trueQuestion.length; j++) {
      saveAnswers.forEach((saveAnswer) => {
        if (
          (saveAnswer.id === trueQuestion[i].value[go + j]) &
          !newArr.includes(trueQuestion[i])
        ) {
          newArr.push(trueQuestion[i]);
        }
      });
    }
  }
  if (newArr.length > 1) {
    return lockQuestion(newArr, saveAnswers, ++go);
  }
  return newArr[0].id;
}

function* mySaga() {
  yield put(nextQuestion());
  yield all([watchAnswer()]);
}

export default mySaga;
