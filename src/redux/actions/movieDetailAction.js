import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const selectedMovieApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const movieReviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );

      const relatedMoviesApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );

      const movieTrailerApi = api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );

      const movieCreditApi = api.get(
        `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );

      let [
        selectedMovie,
        movieReview,
        relatedMovies,
        movieTrailer,
        movieCredit,
      ] = await Promise.all([
        selectedMovieApi,
        movieReviewApi,
        relatedMoviesApi,
        movieTrailerApi,
        movieCreditApi,
      ]);
      // console.log("trailer", movieTrailer);

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          selectedMovie: selectedMovie.data,
          movieReview: movieReview.data,
          relatedMovies: relatedMovies.data,
          movieTrailer: movieTrailer.data,
          movieCredit: movieCredit.data.cast,
        },
      });
    } catch (e) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }

    // dispatch(movieActions)
  };
}

export const movieDetailAction = {
  getMovieDetail,
};
