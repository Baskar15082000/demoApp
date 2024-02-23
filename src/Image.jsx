import React from "react";

const Image = ({ imgLink }) => {
  return (
    <div className="imgs">
      <img style={{width:"7rem"}} src={imgLink} alt="" />
    </div>
  );
};

export default Image;
