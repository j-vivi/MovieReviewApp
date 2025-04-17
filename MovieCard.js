import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [showReviews, setShowReviews] = useState(false);
  const [userReview, setUserReview] = useState("");
  const [allReviews, setAllReviews] = useState(movie.reviews);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const handleSubmit = () => {
    if (userReview.trim() === "") return;
    const newReview = { name: "You", text: userReview };
    setAllReviews([...allReviews, newReview]);
    setUserReview("");
  };

  return (
    <div className="movie-card" onClick={toggleReviews}>
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      {showReviews && (
        <div className="reviews">
          {allReviews.map((rev, index) => (
            <p key={index}>
              <strong>{rev.name}:</strong> {rev.text}
            </p>
          ))}
          <input
            type="text"
            placeholder="Write your review..."
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;