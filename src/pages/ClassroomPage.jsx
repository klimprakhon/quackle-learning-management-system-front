import ClassNavbar from "../features/classroom/components/ClassNavbar";
import ClassSidebar from "../features/classroom/components/ClassSidebar";

function ClassroomPage() {
  return (
    <div className="h-screen w-full">
      <ClassNavbar />
      <ClassSidebar />
    </div>
  );
}

export default ClassroomPage;
