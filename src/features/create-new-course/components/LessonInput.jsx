import MenuIcon from "../../../icons/MenuIcon.svg";
import EditIcon from "../../../icons/EditIcon.svg";
import DeleteIcon from "../../../icons/DeleteIcon.svg";
import useModal from "../../../hooks/useModal";
import ArrowDownIcon from "../../../icons/ArrowDown.svg";
import { useState } from "react";

function LessonInput({
  lesson,
  topicIndex,
  lessonIndex,
  handleDeleteLesson,
  handleSelectAttachment,
}) {
  const { openModal, modalState } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white w-11/12 h-fit rounded-md">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-2">
          <img src={MenuIcon} className="size-5" />
          <h4 className="font-thin text-sm">{lesson?.name}</h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleOpen}
            className="flex bg-green-50 justify-center items-center gap-1 p-2 rounded-lg text-green-800 font-semibold relative"
          >
            Contents
            <img src={ArrowDownIcon} />
            {isOpen && (
              <div className="absolute top-10 right-0 bg-stone-50 p-4 flex flex-col gap-2 justify-start items-start rounded-md shadow-md">
                <option
                  value="video"
                  onClick={(event) => {
                    openModal(event.target.value, lesson);
                    handleSelectAttachment(
                      event.target.value,
                      topicIndex,
                      lessonIndex
                    );
                  }}
                  className="font-thin text-sm hover:font-normal"
                >
                  Video
                </option>
                <option
                  value="pdf"
                  onClick={(event) => {
                    openModal(event.target.value, lesson);
                    handleSelectAttachment(
                      event.target.value,
                      topicIndex,
                      lessonIndex
                    );
                  }}
                  className="font-thin text-sm hover:font-normal"
                >
                  PDF file
                </option>
                <option
                  value="description"
                  onClick={(event) => {
                    openModal(event.target.value, lesson);
                    handleSelectAttachment(
                      event.target.value,
                      topicIndex,
                      lessonIndex
                    );
                  }}
                  className="font-thin text-sm hover:font-normal"
                >
                  Description
                </option>
              </div>
            )}
          </button>
          <button
            type="button"
            onClick={() =>
              openModal("lessonName", { lesson, topicIndex, lessonIndex })
            }
          >
            <img src={EditIcon} className="size-5" />
          </button>
          <button>
            <img
              src={DeleteIcon}
              className="size-5"
              onClick={() => handleDeleteLesson(topicIndex, lessonIndex)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonInput;
