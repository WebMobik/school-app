import React from "react";

const WrapperQuestions = ({ question, setAnswer }) => {
  return (
    <div className="col-md-8 mt-5 m-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{question.title}</h5>
          <div>
            {question.answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className={"d-block mt-2 btn btn-primary"}
                  onClick={() => setAnswer(answer)}
                >
                  {answer.value}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapperQuestions
