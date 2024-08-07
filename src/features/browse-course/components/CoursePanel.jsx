import CourseCard from "./CourseCard";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import courseApi from "../../../APIs/course";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";

function CoursePanel({ selectedCategory }) {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchAllCourse = async () => {
      setLoading(true);
      try {
        let response;
        if (selectedCategory === "All") {
          response = await courseApi.allCourse();
        } else {
          response = await courseApi.getCoursesByCategory(selectedCategory);
        }
        const courses = response.data;
        setCourseData(courses);
      } catch (error) {
        toast.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCourse();
  }, [selectedCategory]);

  const handleClickCourse = (courseId) => {
    if (authUser.isAdmin) {
      navigate(`/admin/course/${courseId}`);
    } else {
      navigate(`/course/${courseId}`);
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      {/*don't forget grid-wrap for responsive*/}
      {loading && <Spinner transparent />}
      {courseData.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-4 xl:px-52 2xl:px-96">
            {courseData.map((item) => (
              <CourseCard
                key={item.id}
                title={item.courseTitle}
                subtitle={item.subtitle}
                price={item.price}
                coverImage={item.coverImage}
                courseId={item.id}
                onClick={() => handleClickCourse(item.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <p>The courses in this category will be released soon.</p>
      )}
      <div>
        <Button title="Browse All Course" width="50" level="secondary" icon />
      </div>
    </div>
  );
}

export default CoursePanel;
