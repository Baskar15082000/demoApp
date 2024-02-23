import React from "react";
import { Carousel } from "antd";
import Image from "./Image";

const Swip = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const arr=["https://static.vecteezy.com/system/resources/thumbnails/028/168/654/small_2x/3d-rendering-of-eu-money-coin-with-sign-of-euro-currency-shattered-into-pieces-falling-apart-depreciation-of-money-financial-crisis-realistic-illustration-isolated-on-transparent-background-png.png","https://cdn-icons-png.flaticon.com/512/8318/8318312.png","https://openclipart.org/image/800px/320548"]
  const arr2=["CHINA'S ECONOMIC CRISI : ","CURRENT SITUATION","ON THE INTERNATIONAL FRONT"]
  const arr3=[" Assessing the gravity os issues behind the stumbling of the Chinese economy", "The continuous decline in chinese stocks has become reason for concern for many across the globe, as it wipe out huge sums of inv3stment dollars.","Us-China relations:Sanctions and trade-related tensions between china and other majorbeconomies like the US add to China's woes."]
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

                <div style={{padding:"4rem 1rem 0 2rem ",fontSize:"1.2rem",width:"8rem"}}>{arr2[index]}</div>
                <Image imgLink={arr[index]} className="zoomable-image" />
                  </div>

                <p style={{margin:"1.5rem",fontSize:"1rem"}}>{arr3[index]}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Swip;
