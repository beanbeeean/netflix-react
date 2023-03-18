let initialState = {
  selectedMovie: null,
  movieTrailer: null,
  movieReview: null,
  relatedMovies: {},
  movieCredit: null,
  loading: true,
};

function movieDetailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        selectedMovie: payload.selectedMovie,
        movieReview: payload.movieReview,
        relatedMovies: payload.relatedMovies,
        movieTrailer: payload.movieTrailer,
        movieCredit: payload.movieCredit,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default movieDetailReducer;
