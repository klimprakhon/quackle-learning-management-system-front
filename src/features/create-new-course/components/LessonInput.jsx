import MenuIcon from "../../../icons/MenuIcon.svg";
import EditIcon from "../../../icons/EditIcon.svg";
import DeleteIcon from "../../../icons/DeleteIcon.svg";
import useModal from "../../../hooks/useModal";

function LessonInput({ lesson, topicIndex, lessonIndex }) {
  const { modalState, openModal } = useModal();
  return (
    <div className="bg-white w-11/12 h-fit rounded-md">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center gap-2">
          <img src={MenuIcon} className="size-5" />
          <h4 className="font-thin text-sm">{lesson?.name}</h4>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() =>
              openModal("lessonName", { lesson, topicIndex, lessonIndex })
            }
          >
            <img src={EditIcon} className="size-5" />
          </button>
          <button>
            <img src={DeleteIcon} className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonInput;
