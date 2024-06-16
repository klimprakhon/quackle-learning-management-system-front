import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (!authUser && !isAuthUserLoading) {
    return <Navigate to="/login" />;
  }

  if (authUser && !authUser.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {isAuthUserLoading && <Spinner />}
      {authUser && authUser.isAdmin && children}
    </>
  );
}

export default AdminRoute;
