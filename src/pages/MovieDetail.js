import React, { useEffect } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { movieDetailAction } from "../redux/actions/movieDetailAction";
import { ClipLoader } from "react-spinners";
import CreditSlide from "../component/CreditSlide";
import ReviewSection from "../component/ReviewSection";
import MovieSlide from "../component/MovieSlide";
import MovieTrailer from "../component/MovieTrailer";

const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, movieReview, relatedMovies, loading } = useSelector(
    (state) => state.detail
  );

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetail(id));
    window.scrollTo(0, 0);
  }, [id]);

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
    <div className="detail-container">
      <Container>
        {/* trailer남음 */}
        <Row style={{ marginBottom: "30px" }}>
          <Col>
            {selectedMovie ? (
              <img
                width={550}
                src={
                  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                  selectedMovie.poster_path
                }
                alt=""
              />
            ) : (
              ""
            )}
          </Col>
          <Col className="detail-wrap">
            {/* 영화 타이틀 */}
            <div className="detail-title">
              <h1>{selectedMovie?.title}</h1>
              <h4 style={{ marginTop: "30px" }}>{selectedMovie?.tagline}</h4>
            </div>
            {/* 영화 장르 , 영화 평점, 누적관람객, 청불여부 */}
            <div className="detail-info-fir">
              <div className="detail-genre">
                {selectedMovie
                  ? selectedMovie.genres.map((movie) => (
                      <span className="genre-badge">{movie.name}</span>
                    ))
                  : ""}
              </div>
              <div>
                <span className="info-option">
                  Release Date &nbsp;/&nbsp;
                  <span>{selectedMovie?.release_date}</span>
                </span>
              </div>
              <div>
                <span className="info-option">
                  Time &nbsp;/&nbsp;
                  <span>{selectedMovie?.runtime} min</span>
                </span>
              </div>
              <div>
                <span className="info-option">
                  Rated &nbsp;/&nbsp;{" "}
                  <span
                    className={
                      selectedMovie.adult == false ? "g-rated" : "r-rated"
                    }
                  >
                    {selectedMovie.adult == false ? "G - rated" : "R - rated"}
                  </span>
                </span>
              </div>
            </div>
            <div className="detail-info-sec">
              <div className="detail-imdb">
                <img
                  style={{ marginRight: "8px" }}
                  width={25}
                  src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png"
                />
                <span>{selectedMovie?.vote_average}</span>
              </div>
              <div className="detail-audience">
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{
                    color: "#ccc",
                    width: "25px",
                    height: "25px",
                    marginRight: "8px",
                  }}
                />
                <span>{selectedMovie?.popularity}</span>
              </div>
              {selectedMovie?.adult == true ? (
                <div className="detail-adult">
                  <img width={30} src="../images/adult.png" />
                </div>
              ) : (
                ""
              )}
            </div>
            {/* 영화 내용 요약 */}
            <div className="detail-content">
              <h4 style={{ fontWeight: "700" }}>OVERVIEW . </h4>
              <p className="content-text">{selectedMovie?.overview}</p>
            </div>
            {/* 영화 트레일러 미리보기(유튜브) */}
            <MovieTrailer />
            {/* <div className="trailer-area">
              <img
                width={300}
                src="https://americanbluestheater.com/wp-content/uploads/2015/06/watchtrailer.png"
              />
            </div> */}
          </Col>
        </Row>
        {/* CAST */}
        <Row>
          <Col style={{ paddingRight: "0" }}>
            <CreditSlide />
          </Col>
        </Row>
        {/* REVIEW */}
        <Row>
          <Col>
            <div style={{ paddingBottom: "20px" }}>
              <h1 className="sec-row-header">
                <span>REVIEW</span>
                <span className="divide-line"></span>
              </h1>
              {movieReview.results.length >= 1 ? (
                <ReviewSection />
              ) : (
                <div className="no-review">
                  {movieReview.results.length == 0 && "THERE'S NO REVIEW"}
                </div>
              )}
            </div>
          </Col>
        </Row>
        {/* RELATED MOVIES */}
        <Row>
          <div style={{ paddingBottom: "40px" }}>
            <h1 className="sec-row-header">
              <span>RELATED MOVIES</span>
              <span className="divide-line"></span>
            </h1>
            <Col>
              <MovieSlide movies={relatedMovies} />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
