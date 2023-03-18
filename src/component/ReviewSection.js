import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const { movieReview } = useSelector((state) => state.detail);
  return (
    <div>
      <Row>
        {movieReview.results.map((list) => (
          <Col md={3}>
            <ReviewCard review={list} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ReviewSection;
