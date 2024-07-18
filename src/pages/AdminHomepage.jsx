import { useState } from "react";
import CoursePanel from "../features/browse-course/components/CoursePanel";
import FilterSelection from "../features/browse-course/components/FilterSelection";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

function AdminHomepage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterSelect = (category) => {
    const capitalizedCategory = capitalizeFirstLetter(category);
    setSelectedCategory(capitalizedCategory);
  };

  return (
    <div>
      <div></div>
      <div className="flex flex-col items-center py-10 gap-4">
        <h2 className="text-3xl font-bold">All Online Course</h2>
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

export default AdminHomepage;
