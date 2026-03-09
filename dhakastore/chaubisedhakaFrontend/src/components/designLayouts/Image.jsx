import React from "react";

const Image = ({ imgSrc, className }) => {
  return <img className={className} src={imgSrc} alt="banner image" />;
};

export default Image;
