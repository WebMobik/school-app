import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signin } from '../../api/user-api';
import auth from '../../api/helpers';

const Signin = () => {
    const history = useHistory()
    const [userData, setUserData] = useState({
        name: null,
        password: null,
        error: false
    })

    const handleSubmitData = (e) => {
        e.preventDefault()
        const {name, password} = userData;
        signin({name, password}).then((data) => {
            if (data.error) {
                console.log(data.error)
            }
            auth.authenticate(data)
            history.replace('/')
        })
    }

    const handleInputData = (name) => (e) => {
        setUserData({...userData, [name]: e.target.value})
    }

    return (
        <div className="content">
            <form onSubmit={handleSubmitData}>
                <FormInput
                    type="text"
                    labelText="Имя пользователя"
                    labelFor="name"
                    placeholder="Введите имя..."
                    input={handleInputData}
                />
                <FormInput
                    type="password"
                    labelText="Пароль"
                    labelFor="password"
                    placeholder="Введите пароль..."
                    input={handleInputData}
                />
                <button type="submit" className="btn btn-primary text-right">Submit</button>
            </form>
        </div>
    )
};

const FormInput = ({ type, labelText, labelFor, input, placeholder }) => (
    <div className="mb-3">
        <label htmlFor={labelFor} className="form-label">{labelText}</label>
        <input
            type={type}
            className="form-control"
            id={labelFor}
            onChange={input(labelFor)}
            placeholder={placeholder}
        />
    </div>
)

export default Signin