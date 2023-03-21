import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const { movieReview } = useSelector((state) => state.detail);

  console.log("리뷰", movieReview);
  return (
    <div>
      <Row>
        {movieReview.results.map((list) => (
          <Col lg={3} md={6}>
            <ReviewCard review={list} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ReviewSection;
