import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovieList() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieListApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      // let response = await fetch(url);
      // let data = await response.json();
      let [popularMovieList, genreList] = await Promise.all([
        popularMovieListApi,
        genreApi,
      ]);
      console.log("getMovieList 호출됨");
      // console.log("list", popularMovieList.data);
      dispatch({
        type: "GET_MOVIE_LIST_SUCCESS",
        payload: {
          popularMovieList: popularMovieList.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      // 에러 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getFilteredMovieList(
  keyword,
  sortType,
  date_gte,
  date_lte,
  vote_gte,
  vote_lte,
  selectedGenre,
  currentPage
) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const filteredMovieListApi = api.get(
        `/discover/movie?api_key=${API_KEY}&language=en-US&region=US${
          keyword ? `&with_text_query=${keyword}` : ""
        }${date_gte ? `&release_date.gte=${date_gte}` : ""}${
          date_lte ? `&release_date.lte=${date_lte}` : ""
        }${sortType ? `&sort_by=${sortType}` : "&sort_by=popularity.desc"}${
          vote_gte ? `&vote_average.gte=${vote_gte}` : ""
        }${vote_lte ? `&vote_average.lte=${vote_lte}` : ""}${
          selectedGenre ? `&with_genres=${selectedGenre}` : ""
        }${currentPage ? `&page=${currentPage}` : "&page=1"}
        `
      );
      // console.log("getFilteredMovie 호출됨");
      // const filteredMovieListApi = api.get(
      //   `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortType}&include_adult=true&include_video=false&page=1`
      // );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      // let response = await fetch(url);
      // let data = await response.json();
      let [filteredMovieList, genreList] = await Promise.all([
        filteredMovieListApi,
        genreApi,
      ]);
      // console.log("list", filteredMovieList.data);
      dispatch({
        type: "GET_FILTERED_MOVIE_LIST_SUCCESS",
        payload: {
          filteredMovieList: filteredMovieList.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      // 에러 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieListAction = { getMovieList, getFilteredMovieList };
