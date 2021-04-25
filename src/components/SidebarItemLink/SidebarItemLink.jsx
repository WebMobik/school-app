import React from "react";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ title, link="", ...props }) => {
  return link ? (
    <Link {...props} to={link} className="nav-link text-white">
      {title}
    </Link>
  ) : (
    <div {...props} className="pointer nav-link text-white">
      {title}
    </div>
  );
};

export default SidebarMenuItem;
