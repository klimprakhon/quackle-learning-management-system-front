import React from "react";
import { Link } from "react-router-dom";

function SidebarItem({ title, icon, to }) {
  return (
    <Link to={to}>
      <button className="flex gap-2 p-2 hover:bg-green-50 hover:font-semibold rounded-md w-full">
        <img src={icon} className="size-6" />
        <p>{title}</p>
      </button>
    </Link>
  );
}

export default SidebarItem;
