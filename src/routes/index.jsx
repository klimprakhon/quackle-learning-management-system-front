import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardContainer from "../layouts/DashboardContainer";
import MyCourse from "../layouts/MyCourse";
import Wishlist from "../layouts/Wishlist";
import Settings from "../layouts/Settings";
import SingleCourse from "../pages/SingleCourse";
import CheckoutPage from "../pages/CheckoutPage";
import ClassroomPage from "../pages/ClassroomPage";
import AdminContainer from "../layouts/AdminContainer";
import AdminHomepage from "../pages/AdminHomepage";
import AdminDashboardContainer from "../layouts/AdminDashboardContainer";
import NewCoursePanel from "../features/create-new-course/components/NewCoursePanel";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import PaymentPage from "../pages/PaymentPage";
import PurchasePanel from "../features/purchase/components/PurchasePanel";
import AdminSingleCourse from "../pages/AdminSingleCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/course/:courseId", element: <SingleCourse /> },
      {
        path: "/checkout/:courseId",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/payment/:courseId",
        element: (
          <ProtectedRoute>
            <PaymentPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardContainer />
          </ProtectedRoute>
        ),

        children: [
          { path: "", element: <MyCourse /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "certification", element: <h1>Coming Soon...</h1> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
  {
    path: "/classroom/:courseId",
    element: (
      <ProtectedRoute>
        <ClassroomPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminContainer />
      </AdminRoute>
    ),

    children: [
      { path: "", element: <AdminHomepage /> },
      { path: "course/:courseId", element: <AdminSingleCourse /> },
      {
        path: "dashboard",
        element: <AdminDashboardContainer />,
        children: [
          { path: "", element: <PurchasePanel /> },
          { path: "new-course", element: <NewCoursePanel /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
