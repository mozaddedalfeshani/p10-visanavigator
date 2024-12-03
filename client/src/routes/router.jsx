import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/MainLayout";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";

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
    ],
  },
]);

export default router;