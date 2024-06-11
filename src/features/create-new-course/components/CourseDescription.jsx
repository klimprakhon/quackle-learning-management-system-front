import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import "./courseDescriptionStyle.css";

function CourseDescription({ initialValue, handleEditorChange }) {
  const [data, setData] = useState(initialValue);

  const onEditorChange = (event, editor) => {
    const content = editor.getData();
    setData(content);
    handleEditorChange(content);
  };
  return (
    <div className="py-4">
      <CKEditor
        editor={ClassicEditor}
        data={data}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "|",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "|",
            "insertTable",
            "|",
            "undo",
            "redo",
          ],
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
        }}
        style={{ height: "1000px" }}
        onChange={onEditorChange}
      />
    </div>
  );
}

export default CourseDescription;
