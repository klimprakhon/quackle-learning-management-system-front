import React from "react";
import SidebarItem from "./SidebarItem";
import MyCourseIcon from "../../../icons/MyCourse.svg";
import WishlistIcon from "../../../icons/Wishlist.svg";
import CertificationIcon from "../../../icons/Certification.svg";
import SettingsIcon from "../../../icons/Settings.svg";

function Sidebar() {
  return (
    <div className="col-span-1 p-2 border-r-2 border-slate-200">
      <SidebarItem title="My Course" icon={MyCourseIcon} to="/dashboard" />
      <SidebarItem
        title="My Wishlist"
        icon={WishlistIcon}
        to="/dashboard/wishlist"
      />
      <SidebarItem
        title="My Certification"
        icon={CertificationIcon}
        to="/dashboard/certification"
      />
      <SidebarItem
        title="Settings"
        icon={SettingsIcon}
        to="/dashboard/settings"
      />
    </div>
  );
}

export default Sidebar;
