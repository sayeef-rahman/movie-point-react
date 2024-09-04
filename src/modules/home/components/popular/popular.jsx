import React, { useState } from "react";
import useFetch from "../../../../hooks/useFetch/userFetch";
import { ContentWrapper } from "../../../utility/components/contentWrapper/contentWrapper";
import SwitchTab from "../../../components/switchTab/switchTab";
import Carousel from "../../../components/carousel/carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        {endpoint === "movie" ? (
          <span className="carouselTitle">Popular Movies</span>
        ) : (
          <span className="carouselTitle">Popular Tv Shows</span>
        )}

        <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
