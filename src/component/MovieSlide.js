import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const MovieSlide = ({ movies }) => {
  let filter = movies.results.filter((item) => item.poster_path !== null);
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

  return (
    <div>
      <Carousel responsive={responsive} className="detail-slide">
        {filter.map((item) => (
          <MovieCard item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
