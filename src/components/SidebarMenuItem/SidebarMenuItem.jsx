import React from "react";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ title, link }) => {
  return (
    <li className="mt-2">
      <Link to={link} className="link-dark rounded">
        {title}
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
