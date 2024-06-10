import DropdownItem from "./DropdownItem";
import MyCourseIcon from "../icons/MyCourse.svg";
import WishlistIcon from "../icons/Wishlist.svg";
import CertificationIcon from "../icons/Certification.svg";
import SettingsIcon from "../icons/Settings.svg";
import LogoutIcon from "../icons/LogoutIcon.svg";
import useAuth from "../hooks/useAuth";

function Dropdown({ openProfile }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {openProfile ? (
        <div className="bg-white rounded-md p-2 w-44 flex flex-col gap-2">
          <DropdownItem title="My Course" to="/dashboard" icon={MyCourseIcon} />
          <DropdownItem
            title="My Wishlist"
            to="/dashboard/wishlist"
            icon={WishlistIcon}
          />
          <DropdownItem
            title="My Certification"
            to="/dashboard/certification"
            icon={CertificationIcon}
          />
          <DropdownItem
            title="Settings"
            to="/dashboard/settings"
            icon={SettingsIcon}
          />
          <DropdownItem
            title="Logout"
            to="/"
            icon={LogoutIcon}
            onClick={handleLogout}
          />
        </div>
      ) : null}
    </>
  );
}

export default Dropdown;
