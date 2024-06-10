import { Outlet } from "react-router-dom";
import UserDashBoard from "../components/UserDashBoard";

function DashboardContainer() {
  return (
    <div className="bg-white py-[100px] flex items-center justify-center">
      <UserDashBoard>
        <Outlet />
      </UserDashBoard>
    </div>
  );
}

export default DashboardContainer;
