import Button from "../../../components/Button";
import CourseForm from "./CourseForm";

function BasicInfoPanel() {
  return (
    <div>
      <div className="flex justify-between px-5 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold">Basic Information</h2>
        <Button title="Save" level="secondary" width="30" />
      </div>

      <CourseForm />
      <div className="flex justify-between">
        <Button title="Cancel" width="30" level="tertiary" />
        <Button title="Save & Next" width="40" />
      </div>
    </div>
  );
}

export default BasicInfoPanel;
