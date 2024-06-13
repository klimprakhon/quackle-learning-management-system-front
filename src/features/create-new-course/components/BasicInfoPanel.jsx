import { useState } from "react";
import Button from "../../../components/Button";
import CourseForm from "./CourseForm";
import courseApi from "../../../APIs/course";

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

  const handleSubmit = async (event) => {
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
        console.error("All fields are required.");
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

      const response = await courseApi.newCourse(courseInfo);
      console.log(response.data.courseInfo.id);
      setNewCourseId(response.data.courseInfo.id);
    } catch (error) {
      console.log(error);
    } finally {
      setSelectIndex(2);
    }
  };

  return (
    <div>
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
            <Button title="Cancel" width="30" level="tertiary" />
            <Button title="Save & Next" width="40" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInfoPanel;
