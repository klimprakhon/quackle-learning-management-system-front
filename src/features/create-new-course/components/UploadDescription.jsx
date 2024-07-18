import { useState } from "react";
import CourseDescription from "./CourseDescription";
import Button from "../../../components/Button";

function UploadDescription({ topicIndex, lessonIndex, handleSaveAttachment }) {
  const [data, setData] = useState("<p>Lesson description...</p>");

  const onEditorChange = (content) => {
    setData(content);
  };

  return (
    <div>
      <div>
        <CourseDescription
          initialValue={data}
          handleEditorChange={onEditorChange}
        />
      </div>
      <Button
        title="Save"
        onClick={() => {
          handleSaveAttachment(data, topicIndex, lessonIndex);
        }}
      />
    </div>
  );
}

export default UploadDescription;
