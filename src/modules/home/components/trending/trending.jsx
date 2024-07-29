import React, { useState } from "react";
import useFetch from "../../../../hooks/useFetch/userFetch";
import Carousel from "../../../components/carousel/carousel";
import SwitchTab from "../../../components/switchTab/switchTab";
import "../../../home/styles.scss";
import { ContentWrapper } from "../../../utility/components/contentWrapper/contentWrapper";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        {endpoint === "day" ? (
          <span className="carouselTitle">Trending of the Day</span>
        ) : (
          <span className="carouselTitle">Trending of the Week</span>
        )}
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
