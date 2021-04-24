import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WrapperQuestions from '../../components/WrapperQuestions'
import { giveAnswer, selectCurrentQuestion } from '../../redux/testsSlice';

const TestApp = () => {
  const dispatch = useDispatch()
  const currentQuestion = useSelector(selectCurrentQuestion)
  const questionAnswer = useRef({})

  const handleNextQuestion = () => {
    dispatch(giveAnswer(questionAnswer.current))
  }

  const selectVariant = (variant) => {
    questionAnswer.current = variant
    console.log(questionAnswer);
  }

  return (
    <div className="container">
      <h1 className="text-center mt-2 text-center">HTML базовый тест</h1>
      <WrapperQuestions question={currentQuestion} setAnswer={selectVariant} />
      <button
        className="btn btn-success m-3 float-end"
        onClick={handleNextQuestion}
      >
        Следующий вопрос
      </button>
    </div>
  )
};

export default TestApp
