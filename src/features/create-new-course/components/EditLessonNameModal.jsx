import { useState } from "react";
import Button from "../../../components/Button";
import useModal from "../../../hooks/useModal";

function EditLessonNameModal({ lesson, handleLessonNameChange }) {
  const { modalState, closeModal } = useModal();
  const [newName, setNewName] = useState(lesson?.name);

  console.log(lesson);
  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSave = () => {
    if (
      lesson &&
      modalState.item.topicIndex !== undefined &&
      modalState.item.lessonIndex !== undefined
    ) {
      handleLessonNameChange(
        newName,
        modalState.item.topicIndex,
        modalState.item.lessonIndex
      );
    }
    closeModal();
  };

  return (
    <div>
      <h2>Edit Lesson Name</h2>
      <input
        type="text"
        value={newName}
        onChange={handleChange}
        className="border rounded p-2 mb-2 w-full"
      />
      <div className="flex justify-end mt-4">
        <Button title="Save" onClick={handleSave} />
      </div>
    </div>
  );
}

export default EditLessonNameModal;
