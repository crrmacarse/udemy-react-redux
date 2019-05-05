import React from "react";

const ImageList = props => {
  const renderImages = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{renderImages}</div>;
};

export default ImageList;
