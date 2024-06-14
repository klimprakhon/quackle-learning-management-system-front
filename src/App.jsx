import Router from "./routes";
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";
import ModalContextProvider from "./contexts/ModalContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ModalContextProvider>
          <Router />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            transition={Slide}
          />
        </ModalContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
