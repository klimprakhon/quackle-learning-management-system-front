import { useState } from "react";
import CoursePanel from "../features/browse-course/components/CoursePanel";
import FilterSelection from "../features/browse-course/components/FilterSelection";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

function BrowseCourse() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterSelect = (category) => {
    const capitalizedCategory = capitalizeFirstLetter(category);
    setSelectedCategory(capitalizedCategory);
  };
  return (
    <div className="bg-slate-100">
      <div className="flex flex-col justify-center items-center p-6 gap-4">
        <h1 className="text-3xl font-bold">All Online Courses</h1>
        <div className="flex gap-2">
          <FilterSelection title="all" onSelect={handleFilterSelect} />
          <FilterSelection title="data" onSelect={handleFilterSelect} />
          <FilterSelection title="business" onSelect={handleFilterSelect} />
          <FilterSelection title="marketing" onSelect={handleFilterSelect} />
          <FilterSelection title="tech" onSelect={handleFilterSelect} />
        </div>
      </div>
      <div className="p-10">
        <CoursePanel selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default BrowseCourse;
