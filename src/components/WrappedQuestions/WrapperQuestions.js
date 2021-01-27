import React, { useEffect, useState } from "react";

export const WrapperQuestions = ({ question, answerQuestion }) => {
  const [answerId, setAnswerId] = useState(null)

  useEffect(() => {
    setAnswerId(null)
  }, [question.id])

  const handleAnswerQuestion = (id, variant) => {
    setAnswerId(id)
    answerQuestion(variant)
  }

  return (
    <div className="col-md-8 mt-5 m-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{question.title}</h5>
          <div>
            {question.variants.map((variant, index) => (
              <button
                key={index}
                className={`d-block mt-2 btn ${index === answerId ? 'btn-success' : 'btn-primary'} ${question.answer ? "disabled" : ''}`}
                onClick={() => handleAnswerQuestion(index, variant)}
              >
                {variant.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
