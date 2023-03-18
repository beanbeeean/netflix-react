import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieListCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.list);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div
      className="movie-list-card"
      style={
        item.poster_path || item.backdrop_path
          ? {
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w220_and_h330_face${
                  item.poster_path ? item.poster_path : item.backdrop_path
                }` +
                ")",
            }
          : {
              backgroundImage:
                "url(https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=684&h=456)",
            }
      }
      onClick={showDetail}
    >
      <div className="list-overlay">
        <h5>{item.title}</h5>
        {/* <div>
          {item.genre_ids.map((id) => (
            <span className="list-genre-badge">
              {genreList.find((item) => item.id == id).name}
            </span>
          ))}
        </div> */}
        <div style={{ marginBottom: "8px" }}>
          <span className="vote-average">★ {item.vote_average}</span>
        </div>
        <span className={item.adult == true ? "r-rated" : "g-rated"}>
          {item.adult == true ? "R - rated" : "G - rated"}
        </span>
      </div>
    </div>
  );
};

export default MovieListCard;
