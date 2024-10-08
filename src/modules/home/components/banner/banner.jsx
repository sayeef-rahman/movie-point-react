import "./styles.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ContentWrapper } from "../../../utility/components/contentWrapper/contentWrapper";
import useFetch from "../../../../hooks/useFetch/userFetch";
import ImageLazyLoading from "../../../components/imageLazyLoading/imageLazyLoading";

const Banner = () => {
  const [background, setBackground] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state?.tmdb);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data, url?.backdrop]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && background && (
        <div className="backdrop-img">
          <img src={background ?? ""} alt="" className="h-dvh" />
          {/* <ImageLazyLoading src={background ?? ""} /> */}
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className=" title">
            Unlimited movies, TV shows, and more Explore now.
          </span>
          <span className="subTitle mt-8">
            Plans now start at USD2.99/month.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
