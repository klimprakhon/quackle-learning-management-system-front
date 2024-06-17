import Router from "./routes";
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";
import ModalContextProvider from "./contexts/ModalContext";
import EnrollContextProvider from "./contexts/EnrollContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <EnrollContextProvider>
          <ModalContextProvider>
            <Router />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              transition={Slide}
            />
          </ModalContextProvider>
        </EnrollContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
