import React from "react";

import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const renderImages = props.images.map(img => {
    return <ImageCard key={img.id} img={img} />;
  });

  return <div className="image-list">{renderImages}</div>;
};

export default ImageList;
