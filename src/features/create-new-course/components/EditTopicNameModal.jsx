import { useState } from "react";
import Button from "../../../components/Button";
import useModal from "../../../hooks/useModal";

function EditTopicNameModal({ handleTopicNameChange }) {
  const { modalState, closeModal } = useModal();
  const [newName, setNewName] = useState(modalState.item?.name);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSave = () => {
    handleTopicNameChange(newName);
    closeModal();
  };

  return (
    <div>
      <h2 className="font-medium text-xl">Edit Topic Name</h2>
      <input
        type="text"
        value={newName}
        onChange={handleChange}
        className="border rounded p-2 mb-2 w-full"
      />
      <div className="flex justify-end mt-4">
        <Button title="Save" type="button" onClick={handleSave} />
      </div>
    </div>
  );
}

export default EditTopicNameModal;
