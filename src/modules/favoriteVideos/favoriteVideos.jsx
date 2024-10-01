import React from "react";
import "./styles.scss";
import { ContentWrapper } from "../utility/components/contentWrapper/contentWrapper";
import MovieCard from "../components/movieCard/movieCard";
import { useSelector } from "react-redux";

const FavoriteVideos = () => {
  const { genres } = useSelector((state) => state.tmdb);
  const favorites = useSelector((state) => state?.favorites);
  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">Favorites List</div>
        </div>
        {favorites?.length > 0 ? (
          <>
            {favorites?.map((item, index) => {
              if (item.media_type === "person") return;
              return (
                <MovieCard
                  key={index}
                  data={item}
                  mediaType={item?.media_type ?? ""}
                  genres={genres}
                />
              );
            })}
          </>
        ) : (
          <span className="resultNotFound">Sorry, Results not found!</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default FavoriteVideos;
