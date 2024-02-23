import React from "react";

const Image = ({ imgLink }) => {
  return (
    <div className="imgs">
      <img className="imageSize" src={imgLink} alt="" />
    </div>
  );
};

export default Image;
