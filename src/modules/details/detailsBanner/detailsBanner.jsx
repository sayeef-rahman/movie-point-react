import moment from "moment";
import React, { useState } from "react";
import { BiListPlus } from "react-icons/bi";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PosterFallback from "../../../assets/no-poster.png";
import useFetch from "../../../hooks/useFetch/userFetch";
import {
  removeFromFavoriteList,
  addToFavoriteList,
} from "../../../store/features/favorites/favorites";
import Genres from "../../components/geners/geners";
import ImageLazyLoading from "../../components/imageLazyLoading/imageLazyLoading";
import VideoPopup from "../../components/videoPopup/videoPopup";
import { ContentWrapper } from "../../utility/components/contentWrapper/contentWrapper";
import "./styles.scss";
import {
  addWishList,
  removeFromWishList,
} from "../../../store/features/wishList/wishList";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.tmdb);
  const favorites = useSelector((state) => state?.favorites);
  const wishList = useSelector((state) => state?.wishList);
  const dispatch = useDispatch();

  const handleFavorite = (favorite) => {
    const isExists = favorites?.some((item) => item?.id === favorite?.id);
    if (isExists) {
      dispatch(removeFromFavoriteList(favorite));
    } else {
      dispatch(addToFavoriteList(favorite));
    }
  };

  const handleWishList = (favorite) => {
    const isExists = favorites?.some((item) => item?.id === favorite?.id);
    if (isExists) {
      dispatch(removeFromWishList(favorite));
    } else {
      dispatch(addWishList(favorite));
    }
  };

  const genres = data?.genres?.map((g) => g.id);

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
              {/* <div className="opacity-layer"></div> */}
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data?.poster_path ? (
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
                    <div className="subtitle">{data?.tagline}</div>

                    <Genres data={genres} />

                    <div className="row">
                      <div
                        className="playBtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video?.key);
                        }}
                      >
                        <FaRegCirclePlay size={20} />
                        <span className="text">Watch Trailer</span>
                      </div>
                      <div className="playBtn">
                        <FaStar size={16} />
                        <span className="text">
                          {data?.vote_average?.toFixed(1)}
                        </span>
                      </div>
                      <button
                        onClick={() => handleFavorite(data)}
                        title="favorite"
                      >
                        {favorites?.some((item) => item?.id === data?.id) ? (
                          <FaHeart className="text-2xl text-red-800" />
                        ) : (
                          <FaRegHeart className="text-2xl text-white" />
                        )}
                      </button>
                      <button onClick={() => handleWishList(data)} title="Save">
                        <BiListPlus className="text-3xl text-purple-600 bg-slate-200 rounded-sm" />
                      </button>
                    </div>

                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data?.overview}</div>
                    </div>

                    <div className="info">
                      {data?.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data?.status}</span>
                        </div>
                      )}
                      {data?.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {moment(data?.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data?.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(data?.runtime)}
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
