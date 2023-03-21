import React, { useEffect } from "react";

const ReviewCard = ({ review }) => {
  let answer = review.author_details.avatar_path;
  console.log("확인", answer);
  return (
    <div className="review-card">
      <div className="user-profile">
        {review.author_details.avatar_path === null ? (
          <img src="../image/profileLogo.jpg" width={50} />
        ) : review.author_details.avatar_path.includes("http") ? (
          <img src="../image/profileLogo.jpg" width={50} />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
            width={50}
          />
        )}
      </div>
      <div className="user-info">
        <div>
          <h5>Author</h5>
          <p>{review.author}</p>
        </div>
        <div>
          <h5>Rating</h5>
          {review.author_details.rating ? (
            <p className="review-rating">{review.author_details.rating} / 10</p>
          ) : (
            <p>X</p>
          )}
        </div>
      </div>
      <h5 style={{ borderBottom: "1px solid #fff", fontWeight: "600" }}>
        Comment
      </h5>
      <div className="user-content">
        <p>{review.content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
