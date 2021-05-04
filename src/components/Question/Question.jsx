import React from "react";
import { useDispatch } from "react-redux";
import Answer from "../Answer/Answer";
import { changeCurrentAnswer, nextQuestion } from '../../redux/testsSlice'

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const changeAnswer = (answer) => {
    dispatch(changeCurrentAnswer(answer))
  }

  const handleNextQuestion = (e) => {
    e.preventDefault()
    dispatch(nextQuestion())
  }

  return (
    <div className="col-md-8 mt-5 m-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{question.title}</h5>
          <form onSubmit={handleNextQuestion} className="d-flex flex-column">
            {question.variants.map((variant, index) => (
              <Answer
                key={+(String(question.id)+index)}
                id={question.id}
                index={index} 
                variant={variant}
                changeVariant={changeAnswer}
              />
            ))}
            <button
              type="submit"
              className="btn btn-success m-3 float-end"
            >
              Следующий вопрос
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Question;
