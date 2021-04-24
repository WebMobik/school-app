import React, { useState } from "react";
import SidebarItemLink from "../SidebarItemLink";

import "./SidebarItem.css";

const SidebarItem = ({ titleMenu, childItems }) => {
  const [linksView, setLinksView] = useState(false);

  const handleShowLinks = () => {
    setLinksView(!linksView);
  };

  return (
    <li className="menu-item mb-1">
      <button
        className="btn btn-toggle d-flex justify-content-between w-100"
        onClick={handleShowLinks}
      >
        {titleMenu}
        <span className={`dropdown-arrow ${linksView && "up"}`}>&#9660;</span>
      </button>
      <ul className="btn-toggle-nav">
        {linksView &&
          childItems.map(({ title, page, id }) => (
            <li key={id} className="mt-2">
              <SidebarItemLink title={title} link={page} />
            </li>
          ))}
      </ul>
    </li>
  );
};

export default SidebarItem;
