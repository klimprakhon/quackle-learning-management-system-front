import { useState } from "react";
import CourseDescription from "./CourseDescription";
import CourseThumbnail from "./CourseThumbnail";
import Input from "../../../components/Input";

function CourseForm() {
  const [courseTitle, setCourseTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    "<p>Course description...</p>"
  );

  const handleEditorChange = (content) => {
    setDescription(content);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <CourseThumbnail />
        </div>
        <div className="px-5 py-4">
          <div>
            <Input
              title="Course Title"
              name="courseTitle"
              value={courseTitle}
              onChange={(event) => setCourseTitle(event.target.value)}
            />
          </div>
          <div>
            <Input
              title="Subtitle"
              name="subtitle"
              value={subtitle}
              onChange={(event) => setSubtitle(event.target.value)}
            />
          </div>
          <div>
            <Input
              title="Price"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
        </div>
        <div className="px-5 py-4">
          <h4 className="text-lg font-medium">Course Description</h4>
          <CourseDescription
            initialValue={description}
            handleEditorChange={handleEditorChange}
          />
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
