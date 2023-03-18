import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w220_and_h330_face${
            item.poster_path ? item.poster_path : item.backdrop_path
          }` +
          ")",
      }}
      onClick={showDetail}
    >
      <div className="overlay">
        <h1 style={{ marginBottom: "50px" }}>{item.title}</h1>
        <div style={{ marginBottom: "20px" }}>
          {item.genre_ids.map((id) => (
            <span className="genre-badge">
              {genreList.find((item) => item.id == id).name}
            </span>
          ))}
        </div>
        <div style={{ marginBottom: "8px" }}>
          <span className="vote-average">
            Vote Average / {item.vote_average}
          </span>
        </div>
        <span className={item.adult == true ? "r-rated" : "g-rated"}>
          {item.adult == true ? "R - rated" : "G - rated"}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
