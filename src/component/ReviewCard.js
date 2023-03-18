import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h4>
        Author. <span className="review-author">{review.author} </span>
      </h4>
      <h4>
        Rating.{" "}
        <span className="review-rating">
          {review.author_details.rating} / 10
        </span>
      </h4>
      <h4>
        Comment.
        <span className="review-date">
          &nbsp; ({review.created_at.substring(0, 10)})
        </span>
      </h4>
      <p className="review-content">{review.content}</p>
    </div>
  );
};

export default ReviewCard;
