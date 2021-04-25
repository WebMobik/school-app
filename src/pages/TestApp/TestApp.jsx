import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Question from "../../components/Question";
import { selectCurrentQuestion, selectIsFinal } from "../../redux/testsSlice";

const TestApp = () => {
  const currentQuestion = useSelector(selectCurrentQuestion);
  const isFinal = useSelector(selectIsFinal);

  return (
    <div className="container">
      <h1 className="text-center mt-2 text-center">HTML базовый тест</h1>
      {!isFinal ? <Question question={currentQuestion} /> : <Redirect to="/result" />}
    </div>
  );
};

export default TestApp;
