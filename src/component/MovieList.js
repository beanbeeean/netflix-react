import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieListCard from "./MovieListCard";

const MovieList = ({ movie }) => {
  // console.log("받은값", movie);
  return (
    <div>
      <Container>
        <Row>
          {movie?.map((item) => (
            <Col xl={3} lg={4} md={6} sm={6}>
              <MovieListCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
