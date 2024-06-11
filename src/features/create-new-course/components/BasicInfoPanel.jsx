import Button from "../../../components/Button";
import UploadImageIcon from "../../../icons/UploadImage.svg";

function BasicInfoPanel() {
  return (
    <div>
      <div className="flex justify-between px-5 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold">Basic Information</h2>
        <Button title="Save" level="secondary" width="30" />
      </div>
      <div className="px-5 py-4">
        <h4 className="text-lg font-medium">Course Thumbnail</h4>
        <div className="flex gap-8 py-4">
          <div className="w-[280px] h-[160px] bg-slate-300"></div>
          <div className="flex flex-col gap-8">
            <span className="font-thin text-xs">
              Upload your course Thumbnail here. <br />
              <strong>Important guidelines: </strong>
              1200x800 pixels or 12:8 Ratio. <br />
              Supported format: <strong>.jpg, .jpeg, or .png</strong>
            </span>
            <label className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-2 rounded-lg text-sm font-semibold flex w-fit justify-center items-center gap-1">
              <input type="file" className="hidden w-10" />
              Upload Image
              <img src={UploadImageIcon} className="size-5" />
            </label>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BasicInfoPanel;
