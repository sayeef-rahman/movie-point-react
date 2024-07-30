import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import { ContentWrapper } from "../../utility/components/contentWrapper/contentWrapper";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ImageLazyLoading from "../imageLazyLoading/imageLazyLoading";
import CircleRating from "../circleRating/circleRating";
import Genres from "../geners/geners";
import moment from "moment/moment";
import "./styles.scss"
import Swal from "sweetalert2";
import axios from "axios";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
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
          setCurrUser(res.data);
        });
    }
  }, [user]);

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

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
    } else if (
      currUser &&
      currUser?.subscriptionStatus !== "paid" &&
      currUser?.role !== "admin"
    ) {
      Swal.fire({
        title: "Please get a subscription and watch your favorite movie",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Subscription",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/subscription");
        }
      });
    } else {
      navigate(`/${item.media_type || endpoint}/${item.id}`);
    }
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() => handleNavigate(item)}
                >
                  <div className="posterBlock">
                    <ImageLazyLoading src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {moment(item.release_date || item.first_air_date).format(
                        "MMM D, YYYY"
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
