import React from "react";
import { Outlet } from "react-router-dom";
import BackgroundImg from "./components/BackgroundImg.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <BackgroundImg /> 
      <Navbar />
      {/* This is where child routes like /app/about will render */}
      <Outlet />
    </>
  );
};

export default App;
