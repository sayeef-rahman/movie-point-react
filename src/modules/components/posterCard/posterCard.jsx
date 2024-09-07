import React from "react";
import ImageLazyLoading from "../imageLazyLoading/imageLazyLoading";
import moment from "moment";

const PosterCard = ({ item, genres, handleNavigate, posterUrl }) => {
  return (
    <div
      key={item.id}
      className="carouselItem"
      onClick={() => handleNavigate(item)}
    >
      <div className="posterBlock">
        <ImageLazyLoading src={posterUrl} />
        {/* <CircleRating rating={item.vote_average.toFixed(1)} /> */}
        {/* <Genres data={item.genre_ids.slice(0, 2)} /> */}
      </div>
      <div className="textBlock">
        <span className="title">{item.title || item.name}</span>
        <div className="">
          {item?.genre_ids?.slice(0, 2)?.map((g) => {
            if (!genres[g]?.name) return;
            return (
              <span key={g} className="generTag">
                {genres[g]?.name}
              </span>
            );
          })}
        </div>
        {/* <div>{item.vote_average.toFixed(1)}</div> */}
        {/* <span className="date">
          {moment(item.release_date || item.first_air_date).format(
            "MMM D, YYYY"
          )}
        </span> */}
      </div>
    </div>
  );
};

export default PosterCard;
