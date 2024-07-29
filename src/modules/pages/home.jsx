import React from "react";
import Banner from "../home/components/banner/banner";
import Trending from "../home/components/trending/trending";
import Popular from "../home/components/popular/popular";
import TopRated from "../home/components/topRated/topRated";
import HeroBanner from "../home/components/heroBanner/heroSectionBanner";

const Home = () => {
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

export default Home;
