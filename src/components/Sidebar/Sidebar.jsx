import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SidebarItem from "../SidebarItem/SidebarItem";
import data, { profileList } from "../../config/staticData";
import auth from "./../../api/helpers";
import { toggleModal, visibleModal } from "../../redux/testsSlice";
import Modal from "../Modal";

import "./Sidebar.css";
import SidebarMenuItem from "../SidebarItemLink/SidebarItemLink";

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
          {isAuth.session ? (
            <>
              <SidebarMenuItem title="Тест" onClick={openModal}/>
              <li className="border-top my-3"></li>
              <SidebarItem
                titleMenu={isAuth.user.name}
                childItems={profileList}
              />
            </>
          ) : (
            <>
              <li className="border-top my-3"></li>
              <SidebarMenuItem title="Войти" link="/sign-in" />
            </>
          )}
        </ul>
        {isOpenModal && (
          <Modal
            title="Вы действительно хотите начать тест ?"
            content="Если тест начнется, вы уже не сможете пользоваться справочником !"
            btnSuccess={onSuccessModal}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
