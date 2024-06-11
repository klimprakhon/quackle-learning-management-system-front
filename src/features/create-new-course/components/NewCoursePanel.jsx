import { useState } from "react";
import BasicInfoIcon from "../../../icons/BasicInfo.svg";
import CurriculumIcon from "../../../icons/Curriculum.svg";
import PublishCourseIcon from "../../../icons/PublishCourse.svg";
import NewCourseSelection from "./NewCourseSelection";
import BasicInfoPanel from "./BasicInfoPanel";
import CurriculumPanel from "./CurriculumPanel";
import PublishCoursePanel from "./PublishCoursePanel";
function NewCoursePanel() {
  const [selectIndex, setSelectIndex] = useState(1);

  return (
    <div className="flex justify-center">
      <div className="w-11/12 bg-white rounded-xl py-12 px-10">
        <div className="flex gap-6 border-b border-slate-300">
          <NewCourseSelection
            title="Basic Information"
            src={BasicInfoIcon}
            index={1}
            selectIndex={selectIndex}
            setSelectIndex={setSelectIndex}
          />
          <NewCourseSelection
            title="Curriculum"
            src={CurriculumIcon}
            index={2}
            selectIndex={selectIndex}
            setSelectIndex={setSelectIndex}
          />
          <NewCourseSelection
            title="Publish Course"
            src={PublishCourseIcon}
            index={3}
            selectIndex={selectIndex}
            setSelectIndex={setSelectIndex}
          />
        </div>
        {selectIndex === 1 && <BasicInfoPanel />}
        {selectIndex === 2 && <CurriculumPanel />}
        {selectIndex === 3 && <PublishCoursePanel />}
      </div>
    </div>
  );
}

export default NewCoursePanel;
