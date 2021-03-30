import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="d-flex justify-conent-between h-100">
      <div className="text-white bg-dark h-100 sidebar">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded">
              <Link to="/" className="link-dark rounded">
                Главная
              </Link>
            </button>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Справочник
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/" className="link-dark rounded">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Weekly
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Monthly
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Annually
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Тесты
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/" className="link-dark rounded">
                    New
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Processed
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Shipped
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-dark rounded">
                    Returned
                  </Link>
                </li>
              </ul>
            </div>
          </li>
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
