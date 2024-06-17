import { useEffect, useState } from "react";
import CourseCard from "../features/browse-course/components/CourseCard";
import useEnroll from "../hooks/useEnroll";
import courseApi from "../APIs/course";

function MyCourse() {
  const { enrollments } = useEnroll();

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    // console.log(enrollments);
    const fetchEnrolledCourse = async () => {
      const courseIds = enrollments.reduce((acc, item, index) => {
        acc[index] = parseInt(item.courseId);
        return acc;
      }, {});

      // console.log(courseIds);
      const response = await courseApi.getEnrolledCourse(courseIds);
      const enrolledCourse = response.data;
      // console.log(response.data);
      setAllCourses(enrolledCourse);
    };
    fetchEnrolledCourse();
  }, [enrollments]);

  return (
    <div>
      <div className="grid grid-cols-3 xl:gap-10">
        {allCourses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              title={course.courseTitle}
              subtitle={course.title}
              price={course.price}
              coverImage={course.coverImage}
              courseId={course.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyCourse;
