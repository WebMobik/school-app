import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SidebarItem from "../SidebarItem/SidebarItem";
import data, { profileList } from "../../config/staticData";
import auth from "./../../api/helpers";
import { toggleModal, visibleModal } from "../../redux/testsSlice";
import Modal from "../Modal";

const Sidebar = ({ children }) => {
  const isAuth = auth.isAuthenticate();
  const dispatch = useDispatch();
  const history = useHistory();
  const isOpenModal = useSelector(visibleModal);

  const openModal = () => {
    dispatch(toggleModal());
  };

  const onSuccessModal = () => {
    dispatch(toggleModal());
    history.push("/test");
  };

  return (
    <div className="d-flex justify-conent-between h-100">
      <div className="text-white bg-dark h-100 sidebar">
        <Link className="nav-link text-white" to="/">
          Главная
        </Link>
        <ul className="list-unstyled ps-0">
          {Object.entries(data).map((item, index) => (
            <SidebarItem key={index} titleMenu={item[0]} childItems={item[1]} />
          ))}
          <li className="sidebar-item" onClick={openModal}>
            Тест
          </li>
          <li className="border-top my-3"></li>
          {isAuth.session ? (
            <SidebarItem
              titleMenu={isAuth.user.name}
              childItems={profileList}
            />
          ) : (
            <Link to="/sign-in" className="nav-link text-white">
              Войти
            </Link>
          )}
        </ul>
        {isOpenModal && (
          <Modal title="text" content="content" btnSuccess={onSuccessModal} />
        )}
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
