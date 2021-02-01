export const cutStrId = (str) => {
  const regexp = /(\d+(:\d)*)/i;
  if (str.match(regexp)) {
    return str.match(regexp)[1];
  }
};

export const getId = (str) => {
  const regexp = /(#\d*)/i;
  return str.match(regexp)[1];
};

export function lockQuestion(trueQuestion, saveAnswers, go = 0) {
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
