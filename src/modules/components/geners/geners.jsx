import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.tmdb);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
