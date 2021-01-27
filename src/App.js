import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header";
import { WrapperQuestions } from "./components/WrappedQuestions/WrapperQuestions";
import { selectQuestion, selectBalls } from "./redux/testsSlice";

const App = () => {
  const dispatch = useDispatch();
  const question = useSelector(selectQuestion);
  const balls = useSelector(selectBalls);

  const handleAnswerClick = (question) => {
    dispatch({ type: "ANSWER_QUESTION", payload: question });
  };

  const handleNextQuestion = (e) => {
    dispatch({ type: "NEXT_QUESTIONS" });
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="text-center mt-2">React тест</h1>
        <h5 className="text-center">Количество баллов: {balls}</h5>
        <WrapperQuestions
          question={question}
          answerQuestion={handleAnswerClick}
        />
        {
          question.variants[1].redirect === undefined && (
            <button
              className="btn btn-success m-3 float-end"
              onClick={handleNextQuestion}
            >
              Следующий вопрос {"->"}
            </button>
          )
        }
      </div>
    </>
  );
};

export default App;
