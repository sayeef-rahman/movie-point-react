import React from "react";
import ImageLazyLoading from "../imageLazyLoading/imageLazyLoading";
import CircleRating from "../circleRating/circleRating";
import { FaStar } from "react-icons/fa6";

const options = { day: "2-digit", month: "short", year: "numeric" };

const PosterCard = ({ item, genres, handleNavigate, posterUrl }) => {
  const getFormattedDate = (releaseDate) => {
    if (releaseDate && releaseDate?.length > 0) {
      const date = new Date(releaseDate);
      const formattedDate = date?.toLocaleDateString("en-GB", options);
      return `| ${formattedDate}`;
    } else {
      return "";
    }
  };

  return (
    <div
      key={item?.id}
      className="carouselItem"
      onClick={() => handleNavigate(item)}
    >
      <div className="posterBlock">
        <ImageLazyLoading src={posterUrl} />
      </div>
      <div className="textBlock">
        <span className="title">{item?.title || item?.name}</span>
        <div className="starRating">
          <span>
            <FaStar size={16} /> {item?.vote_average?.toFixed(1)}
            {" "}
            {getFormattedDate(item?.release_date)}
          </span>
        </div>
        <div className="allGeners">
          {item?.genre_ids?.slice(0, 2)?.map((g) => {
            if (!genres[g]?.name) return;
            return (
              <span key={g} className="generTag">
                {genres[g]?.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
