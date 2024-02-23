import React from "react";
import { Carousel } from "antd";
import Image from "./Image";

const Swip = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const arr=["https://cdn-icons-png.flaticon.com/512/8318/8318312.png","https://cdn-icons-png.flaticon.com/512/5214/5214054.png"]
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
        {arr.map((e, index) => {
          return (
            <div key={index} className="imageSize">
              <div className="contentStyle ">
                  <div style={{display:"flex"}}>

                <div style={{padding:"4rem 1rem 0 2rem ",fontSize:"1.2rem",width:"8rem"}}>CURRENT SITUATION</div>
                <Image imgLink={arr[index]} className="zoomable-image" />
                  </div>

                <p style={{margin:"1.5rem",fontSize:"1rem"}}>The continuous decline in chinese stocks has become reason for concern for many across the globe, as it wipe out huge sums of inv3stment dollars.</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Swip;
