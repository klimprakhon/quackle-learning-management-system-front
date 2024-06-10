import CourseCard from "./CourseCard";
import Button from "../../../components/Button";

function CoursePanel() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      {/*don't forget grid-wrap for responsive*/}
      <div className="grid grid-cols-4 gap-4 xl:px-52 2xl:px-96">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div>
        <Button title="Browse All Course" width="50" level="secondary" icon />
      </div>
    </div>
  );
}

export default CoursePanel;
