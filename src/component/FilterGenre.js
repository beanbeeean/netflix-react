import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FilterGenre = () => {
  const dispatch = useDispatch();
  const API_KEY = process.env.REACT_APP_API_KEY;
  let [gernes, setGenres] = useState();
  const getGenresList = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log("genresList", data);
    setGenres(data);
    // console.log("genresList", gernes);
  };

  const genresDispatch = (id) => {
    // console.log("data", e.target.innerText);
    dispatch({
      type: "GET_SELECTED_GENRES_SUCCESS",
      payload: { selectedGenre: id },
    });
  };
  useEffect(() => {
    getGenresList();
  }, []);

  return (
    <div>
      <h4>Genres</h4>
      <ul className="movies-genres-wrap">
        {gernes?.genres.map((list) => (
          <li onClick={() => genresDispatch(list.id)}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGenre;
