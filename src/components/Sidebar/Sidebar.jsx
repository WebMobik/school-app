import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "../SidebarItem/SidebarItem";
import data from "../../config/staticData";

const Sidebar = ({ children }) => {
  return (
    <div className="d-flex justify-conent-between h-100">
      <div className="text-white bg-dark h-100 sidebar">
        <ul className="list-unstyled ps-0">
          {Object.entries(data).map((item, index) => (
            <SidebarItem key={index} titleMenu={item[0]} childItems={item[1]} />
          ))}
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/" className="link-dark rounded">
                    New...
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
