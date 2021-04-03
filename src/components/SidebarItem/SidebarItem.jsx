import React, { useState } from "react";
import SidebarMenuItem from "../SidebarMenuItem";

import "./SidebarItem.css";

const SidebarItem = ({ titleMenu, childItems }) => {
  const [itemView, setItemView] = useState(false);

  const handleShowItem = () => {
    setItemView(!itemView);
  };

  return (
    <li className="menu-item mb-1">
      <button
        className="btn btn-toggle d-flex justify-content-between w-100"
        onClick={handleShowItem}
      >
        {titleMenu}
        <span className={`dropdown-arrow ${itemView && "up"}`}>&#9660;</span>
      </button>
      <ul className="btn-toggle-nav">
        {itemView &&
          childItems.map(({ title, page, id }) => (
            <SidebarMenuItem key={id} title={title} link={page} />
          ))}
      </ul>
    </li>
  );
};

export default SidebarItem;
