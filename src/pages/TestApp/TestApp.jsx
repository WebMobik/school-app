import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WrapperQuestions from "../../components/WrapperQuestions";
import { giveAnswer, selectCurrentQuestion } from "../../redux/testsSlice";

const TestApp = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion);

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    dispatch(giveAnswer(e.target.value));
  };

  // TODO: настроить правильное прохождение теста

  return (
    <div className="container">
      <h1 className="text-center mt-2 text-center">HTML базовый тест</h1>
      <WrapperQuestions
        question={currentQuestion}
        submitQuestion={handleSubmitQuestion}
      />
    </div>
  );
};

export default TestApp;
