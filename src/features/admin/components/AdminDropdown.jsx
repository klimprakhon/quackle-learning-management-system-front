import useAuth from "../../../hooks/useAuth";
import DropdownItem from "../../../components/DropdownItem";
import NewCourseIcon from "../../../icons/NewCourse.svg";
import PurchaseIcon from "../../../icons/Purchase.svg";
import AdminSettingIcon from "../../../icons/AdminSettings.svg";
import LogoutIcon from "../../../icons/LogoutIcon.svg";

function AdminDropdown({ openProfile, setOpenProfile }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleItemClick = () => {
    setOpenProfile(false);
  };

  return (
    <>
      {openProfile ? (
        <div className="bg-white rounded-md p-2 w-52 flex flex-col gap-2">
          <DropdownItem
            title="Create New Course"
            to="/admin/dashboard/new-course"
            icon={NewCourseIcon}
            onClick={handleItemClick}
          />
          <DropdownItem
            title="Purchasing"
            to="/admin/dashboard"
            icon={PurchaseIcon}
            onClick={handleItemClick}
          />
          <DropdownItem
            title="Settings"
            to="/admin/dashboard/settings"
            icon={AdminSettingIcon}
            onClick={handleItemClick}
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

export default AdminDropdown;
