import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../api/user-api";
import auth from "../../api/helpers";
import { toggleUserAuthenticate } from "../../redux/testsSlice";

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: null,
    password: null,
    error: false
  });

  const handleSubmitData = (e) => {
    e.preventDefault();
    const { name, password } = userData;
    signin({ name, password }).then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      auth.authenticate(data);
      dispatch(toggleUserAuthenticate())
      history.replace("/");
    });
  };

  const handleInputData = (name) => (e) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  return (
    <div className="content d-flex justify-content-center mt-7 w-100">
      <form onSubmit={handleSubmitData} className="w-40 mt-5">
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
        <button type="submit" className="btn btn-primary d-block ms-auto mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

const FormInput = ({ type, labelText, labelFor, input, placeholder }) => (
  <div className="mb-3">
    <label htmlFor={labelFor} className="form-label">
      {labelText}
    </label>
    <input
      type={type}
      className="form-control"
      id={labelFor}
      onChange={input(labelFor)}
      placeholder={placeholder}
    />
  </div>
);

export default Signin;
