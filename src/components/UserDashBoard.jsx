import Sidebar from "../features/dashboard/components/Sidebar";

function UserDashBoard({ children }) {
  return (
    <div className="bg-slate-100 grid grid-cols-6 w-3/4 min-h-fit rounded-lg">
      <Sidebar />
      <div className="col-span-5 min-h-fit p-10">{children}</div>
    </div>
  );
}

export default UserDashBoard;
