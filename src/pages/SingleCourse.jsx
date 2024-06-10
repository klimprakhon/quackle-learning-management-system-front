import { useEffect, useState } from "react";
import Button from "../components/Button";
import CourseAccordian from "../features/browse-course/components/CourseAccordian";
import courseApi from "../APIs/course";
import { useParams } from "react-router-dom";

function SingleCourse() {
  const [info, setInfo] = useState({});
  const { courseId } = useParams();
  useEffect(() => {
    const fetchCourseInfo = async () => {
      try {
        const response = await courseApi.getCourse(courseId);
        const { courseInfo } = response.data;
        setInfo(courseInfo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourseInfo();
  }, [courseId]);

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
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
            <span className="px-20 mb-6">
              Lorem ipsum dolor sit amet. Vel recusandae autem ea voluptatum
              nostrum et nobis magni et minima impedit ut voluptatem iusto et
              necessitatibus modi. Eos enim nihil aut totam accusamus hic esse
              asperiores eos consequuntur enim sit galisum numquam. Aut eligendi
              internos ab magni veritatis quo impedit voluptas et incidunt quia
              ut rerum sunt aut nisi mollitia. Non accusantium nostrum sit
              doloribus voluptas in exercitationem consequatur eos illo dolore
              et recusandae sunt et incidunt repudiandae et ducimus nesciunt.
              Eos deserunt atque quo quod quos id natus aspernatur ab ducimus
              accusantium eum architecto praesentium et libero optio sed
              aspernatur tempore. In galisum placeat est voluptatem quas ut
              accusantium odit qui consequatur similique et nemo nihil. Et
              obcaecati alias nam voluptate nulla est earum alias et quasi
              voluptatem. Est velit aspernatur sit illum eligendi sit facilis
              natus aut illo facere ut Quis quia ut sint eveniet aut ipsum sunt.
              Vel cumque voluptatibus vel natus excepturi est quod mollitia a
              fuga atque eos fuga totam id galisum itaque. Aut officiis veniam
              ut saepe itaque quo unde inventore 33 vitae eaque cum magnam
              accusantium et reiciendis laborum? Nam omnis corrupti sit
              perferendis dicta hic eveniet repudiandae qui obcaecati harum quo
              nesciunt quam sed voluptas commodi vel veniam quibusdam? Aut
              galisum enim est velit dignissimos in aliquam voluptatem sit
              quisquam voluptatum non veniam officiis.
            </span>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Course Content</h1>
            <CourseAccordian />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
