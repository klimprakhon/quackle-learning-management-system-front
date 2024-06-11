import AdminSidebar from "../features/admin/components/AdminSidebar";

function AdminDashBoard({ children }) {
  return (
    <div className="bg-slate-100 grid grid-cols-5 w-4/5 min-h-fit rounded-lg">
      <AdminSidebar />
      <div className="col-span-4 min-h-fit p-10 ">{children}</div>
    </div>
  );
}

export default AdminDashBoard;
