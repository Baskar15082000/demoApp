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
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAHBABAQEBAQEAAwAAAAAAAAAAAAECETEhEmGB/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFB//EABkRAQEBAQEBAAAAAAAAAAAAAAABAhEDEv/aAAwDAQACEQMRAD8A/AyOmYkjeY8V9RxlZG5CRuRFrqzlJGuLIpdazKcXgEvgCg0AAACAigCFFBMU4oE2MpWimmxixmx0rNgZ2OVicdLGeKlY3LnXOx11GbFysN5cLHLUeixy1Gkrj9MuXBoUw4+jI1ISN5c9r3s5WRuRJGkV0ZgEUNAAAAAAAEFCCCoAIoRIihlxEUCWbEaTgTYzxmxtmqZ2OeoxXTUZsVGGo5WOenaxzvxccm45fj+hvtFdZfMe+RuRI1GL2sxYoqW0AAYAAAAAAAAQAQAAICcVAQihpsRFShNZqcaZNFjNZsb0xTjLUYsc9R1rnrxpHL6Rz+C/EUwfRjTMajC17eYsVIpdWAAF8AHQAAAAAAAIBAAAEVAQKgKoUShNRL4pVIrFZremKcZaY056ddOWlxzejAv9FMH0FSLGFezlYqRSWAAAAAIoAAAgAAAAAAAACAAkSqlNFQolNFZrNbZpxnpjTnp0rnVxzbjnwaFMOPdGoy1GD2IoBLUQBqIAgAAAAAAAAAAAACCAGlCiAqlRalNnUrNarNVGemNOdb056XHNsGRTDr3tRhqeMK9fLQCWgAAAGAAgAAwAyACAigAIACKhpEWpTTUSrUpoqVitVimy1Wa56brGlxy7rICmb2tS/GVjGvTy3FSKltAAjAAAAGAAgAAAAAAEoBkgAKolVDZ1EolNFqVitViqjHVZrGmtVy1VxyelOjCr4w+nvlalc5WpWFevmusqs5rSK3zVECWoAAAAAAAAACAAAIBDIQqGm0qVWb4bO1Ep1m02dqVmrWdKjDVZ05brpa47aRyetT8hkXxzde6NwHPXsZbjpARXTlQCaKASgAAAAAABABABklABJUqBoqdSgqM6zWUDjLSW/WKC4w0xpy0C45PVzAW5n//Z",
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
