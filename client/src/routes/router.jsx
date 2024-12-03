import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/MainLayout";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Profile from "../components/Auth/Profile";
import PageNotFound from "../components/utils/PageNotFound";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allvisas",
        element: <div>All visas</div>,
      },
      {
        path: "/visa-details/:country",
        element: <div>Visa details</div>,
      },
      {
        path: "/authPage",
        element: <LoginPage />,
      },
      {
        path: "/profilePage",
        element: <MyProfile />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
