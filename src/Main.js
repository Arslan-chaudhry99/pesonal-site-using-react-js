import React from "react";
import Course from "./Course";
import Team from "./Team";
import Books from "./cart/Books";
import Contact from "./Contact";
import Slider from "./Slider";

const Main = () => {
  return (
    <>
      <Slider />
      <Course />
      <Team />
      <Books />
      <Contact />
    </>
  );
};

export default Main;
