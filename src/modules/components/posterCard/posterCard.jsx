import React from "react";
import { FaStar } from "react-icons/fa6";
import { getFormattedDate } from "../../../utils/methods/getFramttedDate";
import ImageLazyLoading from "../imageLazyLoading/imageLazyLoading";

const PosterCard = ({ item, genres, handleNavigate, posterUrl }) => {
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
            <FaStar size={16} /> {item?.vote_average?.toFixed(1)}{" "}
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
