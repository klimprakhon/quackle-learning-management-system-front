import SidebarItem from "../../dashboard/components/SidebarItem";
import NewCourseIcon from "../../../icons/NewCourse.svg";
import PurchaseIcon from "../../../icons/Purchase.svg";
import AdminSettingIcon from "../../../icons/AdminSettings.svg";

function AdminSidebar() {
  return (
    <div className="col-span-1 p-2 border-r-2 border-slate-200">
      <SidebarItem
        title="Create New Course"
        icon={NewCourseIcon}
        to="/admin/dashboard/new-course"
      />
      <SidebarItem
        title="Purchasing"
        icon={PurchaseIcon}
        to="/admin/dashboard/"
      />
      <SidebarItem
        title="Settings"
        icon={AdminSettingIcon}
        to="/admin/dashboard/settings"
      />
    </div>
  );
}

export default AdminSidebar;
