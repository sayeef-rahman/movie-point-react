import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { ContentWrapper } from "../../utility/components/contentWrapper/contentWrapper";
import ImageLazyLoading from "../../components/imageLazyLoading/imageLazyLoading";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.tmdb);
  const carouselContainer = useRef();
  // const navigate = useNavigate();

  // const navigation = (dir) => {
  //   const container = carouselContainer.current;

  //   const scrollAmount =
  //     dir === "left"
  //       ? container.scrollLeft - (container.offsetWidth + 20)
  //       : container.scrollLeft + (container.offsetWidth + 20);

  //   container.scrollTo({
  //     left: scrollAmount,
  //     behavior: "smooth",
  //   });
  // };

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        {/* <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        /> */}
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems" ref={carouselContainer}>
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <ImageLazyLoading src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
