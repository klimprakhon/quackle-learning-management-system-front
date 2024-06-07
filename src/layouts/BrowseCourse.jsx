import CoursePanel from "../features/browse-course/components/CoursePanel";
import FilterSelection from "../features/browse-course/components/FilterSelection";

function BrowseCourse() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-6 gap-4">
        <h1 className="text-3xl font-bold">All Online Courses</h1>
        <div className="flex gap-2">
          <FilterSelection title="all" />
          <FilterSelection title="data" />
          <FilterSelection title="business" />
          <FilterSelection title="marketing" />
          <FilterSelection title="software" />
        </div>
      </div>
      <div className="p-10">
        <CoursePanel />
      </div>
    </div>
  );
}

export default BrowseCourse;
