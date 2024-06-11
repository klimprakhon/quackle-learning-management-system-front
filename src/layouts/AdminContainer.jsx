import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

function AdminContainer() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}

export default AdminContainer;
