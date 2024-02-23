import React from "react";
import { Carousel } from "antd";
import Image from "./Image";
const contentStyle = {
  margin: 0,
  height: "80vh",

  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "transparent",
  display: "flex",

  justifyContent: "center",
};
const Swip = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const arr = [
    "src/download (1).jpeg",
    "src/download (2).jpeg",
    "src/download (3).jpeg",
    "src/images.jpeg",
    "src/3d-world-news-background-loop-free-video.jpg",
  ];
  return (
    <div
      style={{
        position: "absolute",
        top: "0%",
        right: "16%",
        left: "16%",
      }}
    >
      <Carousel afterChange={onChange}>
        <div>
          <div className="contentStyle">
            <Image imgLink={arr[0]} />
          </div>
        </div>
        <div>
          <div className="contentStyle">
            <Image imgLink={arr[1]} />
          </div>
        </div>
        <div>
          <div className="contentStyle">
            <Image imgLink={arr[2]} />
          </div>
        </div>
        <div>
          <div className="contentStyle">
            <Image imgLink={arr[3]} />
          </div>
        </div>
        <div>
          <div className="contentStyle">
            <Image imgLink={arr[4]} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Swip;
