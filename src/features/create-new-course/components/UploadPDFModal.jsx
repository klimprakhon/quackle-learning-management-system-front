import { useRef, useState } from "react";
import Button from "../../../components/Button";

function UploadPDFModal({ topicIndex, lessonIndex, handleSaveAttachment }) {
  const fileItem = useRef();
  const [data, setData] = useState(null);

  const render = (src) => <iframe className="pdf" src={src} />;

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div>{render(data ? URL.createObjectURL(data) : null)}</div>
      <div className="flex flex-col gap-8">
        <label className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-2 rounded-lg text-sm font-semibold flex w-[300px] justify-center items-center gap-1">
          <input
            type="file"
            className="hidden w-10"
            ref={fileItem}
            onChange={(event) => {
              if (event.target.files[0]) setData(event.target.files[0]);
            }}
          />
          Select PDF file
        </label>
      </div>
      <Button
        title="Upload File"
        onClick={() => handleSaveAttachment(data, topicIndex, lessonIndex)}
      />
    </div>
  );
}

export default UploadPDFModal;
