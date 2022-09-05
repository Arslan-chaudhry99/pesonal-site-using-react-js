import React from "react";
import Footer from "./Footer";
import NavElement from "./NavElement";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <NavElement />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
