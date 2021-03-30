import React, { useState } from "react";

const SidebarItem = () => {
  const [itemView, setItemView] = useState(false);

  return (
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
  );
};

export default SidebarItem;
