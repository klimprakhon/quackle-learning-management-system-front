import Button from "../../../components/Button";
import MenuIcon from "../../../icons/MenuIcon.svg";
import AddIcon from "../../../icons/AddIcon.svg";
import EditIcon from "../../../icons/EditIcon.svg";
import DeleteIcon from "../../../icons/DeleteIcon.svg";

function CurriculumPanel() {
  return (
    <div>
      <div className="flex justify-between px-5 py-4 border-b border-slate-200">
        <h2 className="text-2xl font-semibold">Course Curriculum</h2>
      </div>
      <div>
        <form>
          <div className="flex flex-col items-center py-4">
            <div className="bg-slate-100 w-11/12 h-fit rounded-xl flex flex-col gap-10 p-4">
              <div>
                <div className="flex justify-between items-center px-4 py-2">
                  <div className="flex items-center gap-2">
                    <img src={MenuIcon} className="size-6" />
                    <h4 className="font-semibold">Topic Name </h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={AddIcon} className="size-6" />
                    <img src={EditIcon} className="size-6" />
                    <img src={DeleteIcon} className="size-6" />
                  </div>
                </div>
                <div className="flex flex-col items-center py-2">
                  <div className="bg-white w-11/12 h-fit rounded-md">
                    <div className="flex justify-between items-center p-5">
                      <div className="flex items-center gap-2">
                        <img src={MenuIcon} className="size-5" />
                        <h4 className="font-thin text-sm">Lesson Name </h4>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={EditIcon} className="size-5" />
                        <img src={DeleteIcon} className="size-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <Button title="Add Topic" level="secondary" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end">
        <Button title="Save & Next" width="40" />
      </div>
    </div>
  );
}

export default CurriculumPanel;
