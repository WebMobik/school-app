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
        getUser(_id).then(data => {
            setUser(data)
        })
    }, [])

    return (
        <div className="profile content">
            <h1 className="user-name">{user.name}</h1>
            {user.tests.length ? (
                <div>
                    Здесь написаны тесты и их количество
                </div> 
            ) : (
                <h2 className="mt-5">Вы ещё не прошли тест ни разу !</h2>
            )}
        </div>
    )
};

export default Profile
