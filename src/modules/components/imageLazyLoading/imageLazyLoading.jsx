import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageLazyLoading = ({src, className }) => {
  return (
    <LazyLoadImage className={className || ""} alt="" effect="blur" src={src} />
  );
};

export default ImageLazyLoading;
