import React from "react";
import Header from "../components/Layout/Header";
import Slides from "../components/Route/Slide/Slides";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored/Sponsored";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Slides />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
    </div>
  );
};

export default HomePage;
