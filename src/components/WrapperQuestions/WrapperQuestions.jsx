import React from "react";

const WrapperQuestions = ({ question, setAnswer }) => {
  return (
    <div className="col-md-8 mt-5 m-auto">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">{question.title}</h5>
          <div>
            {question.variants.map((variant, index) => {
              return (
                <button
                  key={index}
                  className={"d-block mt-2 btn btn-primary"}
                  onClick={() => setAnswer({question, variant, id: question.id})}
                >
                  {variant.answer}
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
