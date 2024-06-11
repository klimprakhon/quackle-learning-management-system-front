import AdminDashBoard from "../components/AdminDashBoard";
import { Outlet } from "react-router-dom";

function AdminDashboardContainer() {
  return (
    <div className="bg-white py-[100px] flex items-center justify-center">
      <AdminDashBoard>
        <Outlet />
      </AdminDashBoard>
    </div>
  );
}

export default AdminDashboardContainer;
