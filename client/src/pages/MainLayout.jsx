import React from "react";
import NavBar from "../components/Home/NavBar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <div className="font-roboto">
        <NavBar />
        <div className="w-11/12 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
