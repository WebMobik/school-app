import React, { useEffect, useState } from 'react'
import auth from '../../api/helpers';
import { getUser } from '../../api/user-api';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        tests: []
    })
    
    useEffect(() => {
        const { _id } = auth.getUser()
        getUser(_id).then(({name, tests}) => {
            setUser({name, tests})
        })
    }, [])

    return (
        <div className="profile content">
            <h1 className="user-name">{user.name}</h1>
            {user.tests.length ? (
                <div className="mt-3">
                    <h2>Результаты тестов:</h2>
                    <ul className="fs-5">
                        {user.tests.map((res, index) => (
                            <li key={index} className="mt-3">
                                Количество баллов: {res.count}
                                <br />
                                Дата сдачи теста: {new Date(res.date).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h2 className="mt-5">Вы ещё не прошли тест ни разу !</h2>
            )}
        </div>
    )
};

export default Profile
