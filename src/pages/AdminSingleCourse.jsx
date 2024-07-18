import { useEffect, useState } from "react";
import Button from "../components/Button";
import CourseAccordian from "../features/browse-course/components/CourseAccordian";
import courseApi from "../APIs/course";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AdminSingleCourse() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const { courseId } = useParams();

  const fetchCourseInfo = async () => {
    try {
      const response = await courseApi.getCourse(courseId);
      const { courseInfo } = response.data;
      setInfo(courseInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourseInfo();
  }, [courseId]);

  const handleDelete = async (courseId) => {
    try {
      await courseApi.deleteCourse(courseId);

      toast.success("Deleted course successful");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="h-[500px]">
          <img
            src={info.coverImage}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col px-32 items-center justify-center gap-8 ">
          <div className="flex flex-col gap-6 w-2/3 ">
            <h2 className="text-2xl font-bold">{info.courseTitle}</h2>
            <p>{info.subtitle}</p>
          </div>
          <div className="flex flex-col w-2/3 gap-4">
            <Button title="Enroll Now" />
            <Button title="Add to WishList" level="secondary" />
          </div>
        </div>
      </div>
      <div className="bg-green-50 py-20">
        <div className="bg-white w-4/5 rounded-3xl m-auto p-10">
          <div>
            <h1 className="text-4xl font-bold">Instructor</h1>
            <div className="flex gap-10 px-10 py-6">
              <div className="rounded-full">
                <img
                  src={info.instructor?.profileImage}
                  alt={`${info.instructor?.firstName} ${info.instructor?.lastName}`}
                  className="object-cover size-32 rounded-full"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold">{`${info.instructor?.firstName} ${info.instructor?.lastName}`}</h3>
                <span className="text-md font-light">
                  {info.instructor?.roleTitle}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">Course Description</h1>
            <span className="px-20 mb-6">{info.description}</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Course Content</h1>
            <CourseAccordian />
          </div>
        </div>
        <div
          className="flex justify-center items-center m-6"
          onClick={() => handleDelete(courseId)}
        >
          <button className="bg-red-500 text-white font-semibold hover:font-bold hover:bg-red-600 p-4 rounded-lg">
            Delete This Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSingleCourse;
