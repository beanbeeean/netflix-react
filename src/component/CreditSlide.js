import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";

const CreditSlide = () => {
  const { movieCredit } = useSelector((state) => state.detail);
  // console.log("movie", movieCredit);
  const castlist = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <div className="credit-card">
          <img
            width={200}
            src={
              "https://www.themoviedb.org/t/p/w220_and_h330_face" +
              movieCredit[i]?.profile_path
            }
          />
          <span>{movieCredit[i]?.name}</span>
          <span>({movieCredit[i]?.character})</span>
        </div>
      );
    }
    return arr;
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1300, min: 800 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  if (movieCredit.length < 1) {
    return (
      <div className="cast-section">
        <h1 className="sec-row-header">
          <span>Cast</span>
          <span className="divide-line"></span>
        </h1>
        <div className="cast-error">
          Sorry, there is no information prepared.
        </div>
      </div>
    );
  }

  return (
    <div className="cast-section">
      <h1 className="sec-row-header">
        <span>Cast</span>
        <span className="divide-line"></span>
      </h1>
      <Carousel responsive={responsive} className="detail-slide">
        {castlist()}
      </Carousel>
    </div>
  );
};

export default CreditSlide;
