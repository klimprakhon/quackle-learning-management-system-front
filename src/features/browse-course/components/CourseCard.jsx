import Button from "../../../components/Button";
import CourseCardImage from "../../../assets/course-card.jpeg";
import useAuth from "../../../hooks/useAuth";

function CourseCard() {
  const { authUser } = useAuth();
  return (
    <div className="bg-white max-w-[250px] h-[430px] grid grid-rows-5 border border-slate-300 rounded-lg justify-self-center">
      <div className="relative row-span-3 overflow-hidden">
        <div>
          <img
            src={CourseCardImage}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
        {authUser ? null : (
          <div className="absolute top-2 right-2 bg-white p-1 rounded-md">
            ฿990
          </div>
        )}
      </div>
      <div className="row-span-2 px-5 py-3 flex flex-col gap-2 justify-around">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Course Title</h2>
          <span className="text-sm">
            Lorem ipsum dolor sit amet conse bolli tetur adipiscing.
          </span>
        </div>
        <div className="flex justify-between gap-2">
          {authUser ? (
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
