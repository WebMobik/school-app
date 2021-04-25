import React from 'react'

const Answer = ({id, index, variant, changeVariant}) => {
    return (
        <div className="answer d-flex mt-3">
            <input
                className="form-check-input me-2"
                type="checkbox"
                id={`question${index}.${id}`}
                onChange={() => changeVariant(variant)}
            />
            <label
                className="form-check-label w-90"
                htmlFor={`question${index}.${id}`}
            >
                {variant.answer}
            </label>
      </div>
    )
};

export default Answer
