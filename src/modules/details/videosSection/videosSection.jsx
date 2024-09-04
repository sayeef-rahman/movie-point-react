import React, { useState } from "react";
import { ContentWrapper } from "../../utility/components/contentWrapper/contentWrapper";
import ImageLazyLoading from "../../components/imageLazyLoading/imageLazyLoading";
import VideoPopup from "../../components/videoPopup/videoPopup";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const playIcon = (
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
  );

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video?.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video?.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <ImageLazyLoading
                    src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`}
                  />
                  {playIcon}
                </div>
                <div className="videoTitle">{video?.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
