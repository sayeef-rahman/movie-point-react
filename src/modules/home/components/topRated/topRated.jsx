import { useState } from "react";
import useFetch from "../../../../hooks/useFetch/userFetch";
import { ContentWrapper } from "../../../utility/components/contentWrapper/contentWrapper";
import SwitchTab from "../../../components/switchTab/switchTab";
import Carousel from "../../../components/carousel/carousel";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        {endpoint === "movie" ? (
          <span className="carouselTitle">Top Rated Movies</span>
        ) : (
          <span className="carouselTitle">Top Rated Tv Shows</span>
        )}
        <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
