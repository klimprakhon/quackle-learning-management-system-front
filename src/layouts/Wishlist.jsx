import CourseCard from "../features/browse-course/components/CourseCard";

function Wishlist() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-3 xl:gap-10">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
