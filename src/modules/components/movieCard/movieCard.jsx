import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PosterFallback from "../../../assets/no-poster.png";
import useAuth from "../../../hooks/useAuth/useAuth";
import { getFormattedDate } from "../../../utils/methods/getFramttedDate";
import ImageLazyLoading from "../imageLazyLoading/imageLazyLoading";
import "./styles.scss";

const MovieCard = ({ data, fromSearch, mediaType, genres }) => {
  const { url } = useSelector((state) => state.tmdb);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleNavigate = (item) => {
    if (!user && !user?.email) {
      Swal.fire({
        title: "Please Login to watch movie",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
    else {
      navigate(`/${data?.media_type || mediaType}/${data.id}`);
    }
  };

  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
    console.log("data", data);
  return (
    <div className="movieCard" onClick={handleNavigate}>
      <div className="posterBlock">
        <ImageLazyLoading className="posterImg" src={posterUrl} />
        {/* {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )} */}
      </div>
      {/* <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {moment(data.release_date).format("MMM D, YYYY")}
        </span>
      </div> */}
      <div className="textBlock">
        <span className="title">{data?.title || data?.name}</span>
        <div className="starRating">
          <span>
            <FaStar size={16} /> {data?.vote_average?.toFixed(1)}
            {" "}
            {getFormattedDate(data?.release_date)}
          </span>
        </div>
        <div className="allGeners">
          {data?.genre_ids?.slice(0, 2)?.map((g) => {
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

export default MovieCard;
