import React from "react";
import { useParams } from "react-router-dom";
import DetailsBanner from "../modules/details/DetailsBanner/DetailsBanner";
import useFetch from "../hooks/useFetch/userFetch";
import Cast from "../modules/details/cast/cast";
import VideosSection from "../modules/details/videosSection/videosSection";
import Similar from "../modules/components/similar/similar";
import Recommendations from "../modules/components/recommendations/recommendations";

const DetailsPage = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}`
  );

  return (
    <div>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </div>
  );
};

export default DetailsPage;
