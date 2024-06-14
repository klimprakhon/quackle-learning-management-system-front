import useModal from "../hooks/useModal";
import Button from "./Button";

function Modal({ children }) {
  const { modalState, closeModal } = useModal();
  return (
    <div>
      {modalState.isOpen ? (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex ">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-2xl">
            <span className="absolute top-0 right-0 p-4">
              <button onClick={closeModal} className="text-gray-700 font-bold">
                &times;
              </button>
            </span>
            {children}
            <div className="flex justify-end mt-4">
              <Button
                title="Cancel"
                type="button"
                level="tertiary"
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
