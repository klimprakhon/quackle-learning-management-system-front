import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function ProtectedRoute({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (!authUser && !isAuthUserLoading) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isAuthUserLoading && <Spinner />}
      {children}
    </>
  );
}

export default ProtectedRoute;
