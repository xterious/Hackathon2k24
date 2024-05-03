import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <div className="overflow-auto flex-1 flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
