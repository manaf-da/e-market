import React from "react";
import Header from "../components/Layout/Header";
import Slides from "../components/Route/Slide/Slides";
import Categories from "../components/Route/Categories/Categories";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Slides />
      <Categories />
    </div>
  );
};

export default HomePage;
