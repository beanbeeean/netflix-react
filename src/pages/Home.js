import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // loading == true ? loading스피너 보여주기 : data를 보여준다
  // true : 데이터 도착 전 / false : 데이터 도착 후 or 에러가 났을 때
  if (loading) {
    return (
      <div className="loading-container">
        <ClipLoader
          color="#ffff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <div>
      <Banner movies={popularMovies.results} />
      <div className="slider-section">
        <h1 className="home-list-title">
          <span className="title-span">Popular Movie</span>
          <span className="divide-line"></span>
        </h1>
        <MovieSlide movies={popularMovies} />
      </div>
      <div className="slider-section">
        <h1 className="home-list-title">
          <span>Top Rated Movie</span>
          <span className="divide-line"></span>
        </h1>
        <MovieSlide movies={topRatedMovies} />
      </div>
      <div className="slider-section">
        <h1 className="home-list-title">
          <span>Upcoming Movie</span>
          <span className="divide-line"></span>
        </h1>
        <MovieSlide movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;
