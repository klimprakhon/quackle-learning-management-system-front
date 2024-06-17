import CoursePanel from "../features/browse-course/components/CoursePanel";
import FilterSelection from "../features/browse-course/components/FilterSelection";

function AdminHomepage() {
  return (
    <div>
      <div></div>
      <div className="flex flex-col items-center py-10 gap-4">
        <h2 className="text-3xl font-bold">All Online Course</h2>
        <div className="flex gap-2">
          <FilterSelection title="all" />
          <FilterSelection title="data" />
          <FilterSelection title="business" />
          <FilterSelection title="marketing" />
          <FilterSelection title="tech" />
        </div>
      </div>
      <div className="p-10">
        <CoursePanel />
      </div>
    </div>
  );
}

export default AdminHomepage;
