import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardContainer from "../layouts/DashboardContainer";
import MyCourse from "../layouts/MyCourse";
import Wishlist from "../layouts/Wishlist";
import Settings from "../layouts/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/dashboard",
        element: <DashboardContainer />,
        children: [
          { path: "", element: <MyCourse /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "certification", element: <h1>Certification</h1> },
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
