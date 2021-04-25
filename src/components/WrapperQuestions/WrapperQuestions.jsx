import React from "react";

const WrapperQuestions = ({ question, submitQuestion }) => {
  return (
    <div className="col-md-8 mt-5 m-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{question.title}</h5>
          <form onSubmit={submitQuestion} className="d-flex flex-column">
            {question.variants.map((variant, index) => (
              <div className="answer d-flex" key={index}>
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id={`question${question.id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`question${question.id}`}
                >
                  {variant.answer}
                </label>
              </div>
            ))}
            <button type="submit" className="btn btn-success m-3 float-end">
              Следующий вопрос
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WrapperQuestions;
