import CourseCard from "./CourseCard";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import courseApi from "../../../APIs/course";

function CoursePanel() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchAllCourse = async () => {
      const response = await courseApi.allCourse();
      const allCourse = response.data;
      // console.log(allCourse);
      setCourseData(allCourse);
    };
    fetchAllCourse();
  }, []);

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      {/*don't forget grid-wrap for responsive*/}
      <div className="grid grid-cols-4 gap-4 xl:px-52 2xl:px-96">
        {courseData.map((item) => (
          <CourseCard
            key={item.id}
            title={item.courseTitle}
            subtitle={item.subtitle}
            price={item.price}
            coverImage={item.coverImage}
            courseId={item.id}
          />
        ))}
      </div>
      <div>
        <Button title="Browse All Course" width="50" level="secondary" icon />
      </div>
    </div>
  );
}

export default CoursePanel;
