import Button from "../../../components/Button";
import CourseCardImage from "../../../assets/course-card.jpeg";
import useAuth from "../../../hooks/useAuth";
import useEnroll from "../../../hooks/useEnroll";

function CourseCard({ title, subtitle, price, coverImage, courseId }) {
  const { authUser } = useAuth();
  const { checkEnrollment } = useEnroll();

  const isEnrolled = checkEnrollment(courseId);

  return (
    <div className="bg-white max-w-[250px] h-[450px] grid grid-rows-5 border border-slate-300 rounded-lg justify-self-center">
      <div className="relative row-span-3 overflow-hidden">
        <div className="w-full h-full">
          <img
            src={coverImage}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {isEnrolled ? null : (
          <div className="absolute top-2 right-2 bg-white p-1 rounded-md opacity-80">
            {price}฿
          </div>
        )}
      </div>
      <div className="row-span-2 px-5 py-3 flex flex-col gap-2 justify-around">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-sm">{subtitle}</span>
        </div>
        <div className="flex justify-between gap-2">
          {isEnrolled ? (
            <Button title="Learn Now" />
          ) : (
            <>
              <Button title="Enroll Now" width="30" small />
              <Button title="Learn More" level="tertiary" width="30" small />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
