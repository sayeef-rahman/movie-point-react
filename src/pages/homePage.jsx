import React from "react";
import Banner from "../modules/home/components/banner/banner";
import Trending from "../modules/home/components/trending/trending";
import Popular from "../modules/home/components/popular/popular";
import HeroBanner from "../modules/home/components/heroBanner/heroSectionBanner";
import TopRated from "../modules/home/components/topRated/topRated";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Trending />
      <Popular />
      <HeroBanner />
      <TopRated />
    </div>
  );
};

export default HomePage;
