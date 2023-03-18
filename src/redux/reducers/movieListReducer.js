let initialState = {
  popularMovieList: {},
  loading: true,
  genreList: [],
  filteredMovieList: {},
  sortType: "",
  date_gte: "",
  date_lte: "",
  vote_gte: "",
  vote_lte: "",
  selectedGenre: "",
  keyword: "",
  currentPage: 1,
};
function movieListReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_LIST_SUCCESS":
      return {
        ...state,
        popularMovieList: payload.popularMovieList,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_FILTERED_MOVIE_LIST_SUCCESS":
      return {
        ...state,
        filteredMovieList: payload.filteredMovieList,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    case "GET_SORT_TYPE_SUCCESS":
      return {
        ...state,
        sortType: payload.sortType,
      };
    case "GET_RELEASE_DATE_SUCCESS":
      return {
        ...state,
        date_gte: payload.date_gte,
        date_lte: payload.date_lte,
      };
    case "GET_VOTE_SCORE_SUCCESS":
      return {
        ...state,
        vote_gte: payload.vote_gte,
        vote_lte: payload.vote_lte,
      };
    case "GET_SELECTED_GENRES_SUCCESS":
      return {
        ...state,
        selectedGenre: payload.selectedGenre,
      };
    case "GET_KEYWORD_SUCCESS":
      return {
        ...state,
        keyword: payload,
      };
    case "GET_CURRENT_PAGE_SUCCESS":
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return { ...state };
  }
}

export default movieListReducer;
