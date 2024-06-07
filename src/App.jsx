import Router from "./routes";
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          transition={Slide}
        />
      </AuthContextProvider>
    </>
  );
}

export default App;
