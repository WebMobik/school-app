import React from "react";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ title, link }) => {
  return (
    <Link to={link} className="link-dark rounded">
      {title}
    </Link>
  );
};

export default SidebarMenuItem;
