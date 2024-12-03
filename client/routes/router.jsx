import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function router() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
}
