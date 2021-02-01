import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header";
import { WrapperQuestions } from "./components/WrappedQuestions/WrapperQuestions";
import { selectQuestion, selectQuestionKey } from "./redux/testsSlice";

const App = () => {
  const [answer, setAnswer] = useState(null);
  const dispatch = useDispatch();
  const question = useSelector(selectQuestion);
  const questionKey = useSelector(selectQuestionKey);

  useEffect(() => {
    setAnswer(question.id);
  }, [question]);

  const handleNextQuestion = () => {
    dispatch({ type: "CHECK_ANSWER", payload: answer });
    setAnswer();
  };
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center mt-2">React тест</h1>
        <WrapperQuestions question={question} setAnswer={setAnswer} />
        <button
          className="btn btn-success m-3 float-end"
          onClick={handleNextQuestion}
        >
          Следующий вопрос {"->"}
        </button>
      </div>
    </>
  );
};

export default App;
