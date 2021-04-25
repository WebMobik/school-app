import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import auth from '../../api/helpers';
import { testResult } from '../../api/user-api';
import { switchTextResult } from '../../helpers';
import { changeFinalState, selectAllBalls } from '../../redux/testsSlice';

const Result = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const allBalls = useSelector(selectAllBalls)

    useEffect(() => {
        const { _id } = auth.getUser()
        const data = {_id, tests: {count: allBalls}}
        testResult(data)
    });

    const handleBackToHome = () => {
        dispatch(changeFinalState())
        history.push('/')
    }

    return (
        <div className="container">
            <div className="content text-center m-auto">
                <h1>Общее количество баллов за тест: {allBalls}</h1>
                <p>{switchTextResult(allBalls)}</p>
                <button onClick={handleBackToHome}>
                    Вернуться на главную
                </button>
            </div>
        </div>
    )
};

export default Result;
