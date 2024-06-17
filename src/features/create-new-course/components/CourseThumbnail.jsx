import { useRef } from "react";
import UploadImageIcon from "../../../icons/UploadImage.svg";

function CourseThumbnail({ render, coverImage, setCoverImage }) {
  const fileItem = useRef();

  return (
    <div className="px-5 py-4">
      <h4 className="text-lg font-medium">Course Thumbnail</h4>
      <div className="flex gap-8 py-4">
        <div>
          {render(
            coverImage ? (
              URL.createObjectURL(coverImage)
            ) : (
              <div className="w-[280px] h-[160px] bg-slate-300">
                <img src="https://placehold.co/2800x160" />
              </div>
            )
          )}
        </div>
        <div className="flex flex-col gap-8">
          <span className="font-thin text-xs">
            Upload your course Thumbnail here. <br />
            <strong>Important guidelines: </strong>
            1200x800 pixels or 12:8 Ratio. <br />
            Supported format: <strong>.jpg, .jpeg, or .png</strong>
          </span>
          <label className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-2 rounded-lg text-sm font-semibold flex w-fit justify-center items-center gap-1">
            <input
              type="file"
              className="hidden w-10"
              ref={fileItem}
              onChange={(event) => {
                if (event.target.files[0]) setCoverImage(event.target.files[0]);
              }}
            />
            Upload Image
            <img src={UploadImageIcon} className="size-5" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default CourseThumbnail;
