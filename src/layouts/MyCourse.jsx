import CourseCard from "../features/browse-course/components/CourseCard";

function MyCourse() {
  return (
    <div>
      <div className="grid grid-cols-3 xl:gap-10">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default MyCourse;
