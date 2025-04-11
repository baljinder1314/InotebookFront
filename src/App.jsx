import React from "react";
import { Outlet } from "react-router-dom";
import BackgroundImg from "./components/BackgroundImg.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <BackgroundImg />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
