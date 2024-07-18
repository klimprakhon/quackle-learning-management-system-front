import { useState } from "react";
import Button from "../../../components/Button";
import CourseForm from "./CourseForm";
import courseApi from "../../../APIs/course";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";

function BasicInfoPanel({
  selectIndex,
  setSelectIndex,
  newCourseId,
  setNewCourseId,
}) {
  const [courseTitle, setCourseTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [subcategoryId, setSubcategoryId] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    "<p>Course description...</p>"
  );
  const [coverImage, setCoverImage] = useState(null);
  const [level, setLevel] = useState("BEGINNER");
  const [loading, setLoading] = useState(false);

  console.log(coverImage);

  const handleSubmit = async (event) => {
    const toastId = toast.loading(" Please wait a moment...");
    try {
      event.preventDefault();

      if (
        !courseTitle ||
        !subtitle ||
        !subcategoryId ||
        !price ||
        !description ||
        !level
      ) {
        toast.update(toastId, {
          render: "All fields are required.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }

      const courseInfo = new FormData();
      courseInfo.append("courseTitle", courseTitle);
      courseInfo.append("subtitle", subtitle);
      courseInfo.append("subcategoryId", subcategoryId);
      courseInfo.append("price", price);
      courseInfo.append("description", description);
      courseInfo.append("level", level);
      courseInfo.append("coverImage", coverImage);

      setLoading(true);

      const response = await courseApi.newCourse(courseInfo);
      // console.log(response.data.courseInfo.id);
      setNewCourseId(response.data.courseInfo.id);

      toast.update(toastId, {
        render: "Create new course successfully. Please follow the next step",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setSelectIndex(2);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Spinner transparent />}
      <div className="flex justify-between px-5 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold">Basic Information</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <CourseForm
            courseTitle={courseTitle}
            setCourseTitle={setCourseTitle}
            subtitle={subtitle}
            setSubtitle={setSubtitle}
            category={category}
            setCategory={setCategory}
            subcategory={subcategory}
            setSubcategory={setSubcategory}
            subcategoryId={subcategoryId}
            setSubcategoryId={setSubcategoryId}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription}
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            level={level}
            setLevel={setLevel}
          />

          <div className="flex justify-between">
            <Button title="Cancel" type="reset" width="30" level="tertiary" />
            <Button title="Save & Next" type="submit" width="40" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInfoPanel;
