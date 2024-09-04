import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PosterFallback from "../../../assets/fallbacks-image-man.jpg";
import "./styles.scss";
import axios from "axios";
import moment from "moment";
import { toast } from "react-hot-toast";
import { BiListPlus } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth/useAuth";
import useFetch from "../../../hooks/useFetch/userFetch";
import { ContentWrapper } from "../../utility/components/contentWrapper/contentWrapper";
import ImageLazyLoading from "../../components/imageLazyLoading/imageLazyLoading";
import Genres from "../../components/geners/geners";
import CircleRating from "../../components/circleRating/circleRating";
import VideoPopup from "../../components/videoPopup/videoPopup";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.tmdb);
  const { user } = useAuth();

  const handleFavorite = (favorite) => {
    const {
      adult,
      title,
      name,
      backdrop_path,
      first_air_date,
      id,
      poster_path,
      vote_average,
    } = favorite;

    axios
      .post(`https://movie-app-server-eight.vercel.app/favorite`, {
        email: user?.email,
        adult,
        title,
        name,
        backdrop_path: backdrop_path,
        first_air_date,
        id,
        poster_path: poster_path,
        vote_average,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("added to favorite");
        } else {
          toast.error("This movie already added to your favorite collection");
        }
      });
  };

  const handleSave = (saveMovie) => {
    const {
      adult,
      title,
      name,
      backdrop_path,
      first_air_date,
      id,
      poster_path,
      vote_average,
    } = saveMovie;

    axios
      .post(`https://movie-app-server-eight.vercel.app/save`, {
        email: user?.email,
        adult,
        title,
        name,
        backdrop_path: backdrop_path,
        first_air_date,
        id,
        poster_path: poster_path,
        vote_average,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("added to watch later");
        } else {
          toast.error(
            "This movie already added to your watch later collection"
          );
        }
      });
  };

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <ImageLazyLoading src={url.backdrop + data?.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <ImageLazyLoading
                        className="posterImg"
                        src={url.backdrop + data?.poster_path}
                      />
                    ) : (
                      <ImageLazyLoading
                        className="posterImg"
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data?.name || data?.title} (${moment(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{data.tagline}</div>

                    <Genres data={_genres} />

                    <div className="row">
                      <CircleRating rating={data.vote_average.toFixed(1)} />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="80px"
                          height="80px"
                          viewBox="0 0 213.7 213.7"
                          enableBackground="new 0 0 213.7 213.7"
                          xmlSpace="preserve"
                        >
                          <polygon
                            className="triangle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="73.5,62.5 148.5,105.8 73.5,149.1 "
                          ></polygon>
                          <circle
                            className="circle"
                            fill="none"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="106.8"
                            cy="106.8"
                            r="103.3"
                          ></circle>
                        </svg>
                        <span className="text">Watch Trailer</span>
                      </div>
                      <button
                        onClick={() => handleFavorite(data)}
                        title="favorite"
                      >
                        <FaHeart className="text-2xl text-red-800" />
                      </button>
                      <button onClick={() => handleSave(data)} title="Save">
                        <BiListPlus className="text-3xl text-purple-600 bg-slate-200 rounded-sm" />
                      </button>
                    </div>

                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>

                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {moment(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer: </span>
                        <span className="text">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
