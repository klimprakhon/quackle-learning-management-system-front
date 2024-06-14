import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  // State to manage the modal
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    item: null,
  });

  // Function to open the modal
  const openModal = (type, item) => {
    console.log(type, item);
    setModalState({
      isOpen: true,
      type,
      item,
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: "",
      item: null,
    });
  };

  const value = {
    modalState,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
