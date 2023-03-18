import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import FilterArea from "../component/FilterArea";
import MovieList from "../component/MovieList";
import { movieListAction } from "../redux/actions/movieListAction";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Movies = () => {
  const dispatch = useDispatch();
  let total_page;

  const {
    filteredMovieList,
    sortType,
    date_gte,
    date_lte,
    vote_gte,
    vote_lte,
    loading,
    selectedGenre,
    keyword,
    currentPage,
  } = useSelector((state) => state.list);

  const pageChange = (event, page) => {
    console.log("page", page);
    dispatch({ type: "GET_CURRENT_PAGE_SUCCESS", payload: page });
  };

  const getTotalPage = (totalpage) => {
    if (totalpage > 30) {
      total_page = 30;
    } else {
      total_page = totalpage;
    }
  };
  getTotalPage(filteredMovieList.total_pages);

  useEffect(() => {
    dispatch(movieListAction.getFilteredMovieList());
    console.log("start currentPage", currentPage);
  }, []);

  useEffect(() => {
    // console.log("date_gte", date_gte);
    // console.log("date_lte", date_lte);
    // console.log("selectedGenre", selectedGenre);
    dispatch(
      movieListAction.getFilteredMovieList(
        keyword,
        sortType,
        date_gte,
        date_lte,
        vote_gte,
        vote_lte,
        selectedGenre
      )
    );

    console.log("fff", filteredMovieList);
  }, [
    keyword,
    sortType,
    date_gte,
    date_lte,
    vote_gte,
    vote_lte,
    selectedGenre,
  ]);

  useEffect(() => {
    dispatch(
      movieListAction.getFilteredMovieList(
        keyword,
        sortType,
        date_gte,
        date_lte,
        vote_gte,
        vote_lte,
        selectedGenre,
        currentPage
      )
    );
  }, [currentPage]);

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
    <Container>
      <Row>
        <Col lg={4} md={4}>
          <FilterArea />
        </Col>
        <Col lg={8} md={8}>
          <MovieList movie={filteredMovieList.results} />
          <div className="pagination-section">
            <Stack spacing={2}>
              <Pagination
                onChange={pageChange}
                page={currentPage}
                count={Number(total_page)}
              />
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
