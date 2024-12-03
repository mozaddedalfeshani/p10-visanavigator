import React from "react";
import NavBar from "../components/Home/NavBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
  
      <NavBar />
      <Outlet />
    </div>
  );
}
