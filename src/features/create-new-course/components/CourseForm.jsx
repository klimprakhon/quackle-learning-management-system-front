import CourseDescription from "./CourseDescription";
import CourseThumbnail from "./CourseThumbnail";
import Input from "../../../components/Input";
import CourseCatSelection from "./CourseCatSelection";

function CourseForm({
  courseTitle,
  setCourseTitle,
  subtitle,
  setSubtitle,
  category,
  setCategory,
  subcategory,
  setSubcategory,
  subcategoryId,
  setSubcategoryId,
  price,
  setPrice,
  description,
  setDescription,
  coverImage,
  setCoverImage,
  level,
  setLevel,
}) {
  const handleEditorChange = (content) => {
    setDescription(content);
  };

  return (
    <div>
      <div>
        <div>
          <CourseThumbnail
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            render={(src) => <img src={src} className="w-[280px] h-[160px]" />}
          />
        </div>
        <div className="px-5 py-4 flex flex-col gap-4">
          <div>
            <Input
              title="Course Title"
              name="courseTitle"
              placeholder="Your course title"
              font="bigThin"
              value={courseTitle}
              onChange={(event) => setCourseTitle(event.target.value)}
            />
          </div>
          <div>
            <Input
              title="Subtitle"
              name="subtitle"
              placeholder="Your course subtitle"
              font="bigThin"
              value={subtitle}
              onChange={(event) => setSubtitle(event.target.value)}
            />
          </div>
        </div>
        <div>
          <CourseCatSelection
            category={category}
            setCategory={setCategory}
            subcategory={subcategory}
            setSubcategory={setSubcategory}
            subcategoryId={subcategoryId}
            setSubcategoryId={setSubcategoryId}
            level={level}
            setLevel={setLevel}
          />
        </div>
        <div className="px-5 py-4">
          <Input
            title="Price"
            name="price"
            font="bigThin"
            placeholder="Your course price in THB"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="px-5 py-4">
          <h4 className="text-lg font-medium">Course Description</h4>
          <CourseDescription
            initialValue={description}
            handleEditorChange={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseForm;
