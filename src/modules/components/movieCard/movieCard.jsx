import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import ImageLazyLoading from "../imageLazyLoading/imageLazyLoading";
import CircleRating from "../circleRating/circleRating";
import Genres from "../geners/geners";
import moment from "moment";
import useAuth from "../../../hooks/useAuth/useAuth";
import PosterFallback from "../../../assets/no-poster.png"
import axios from "axios";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.tmdb);
  const navigate = useNavigate();
  const { user } = useAuth();

  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://movie-app-server-eight.vercel.app/userprofile/${user?.email}`
        )
        .then((res) => {
          // console.log(res.data);
          setCurrUser(res.data);
        });
    }
  }, [user]);

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
  return (
    <div className="movieCard" onClick={handleNavigate}>
      <div className="posterBlock">
        <ImageLazyLoading className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {moment(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
