import React, { useEffect, useState } from "react";


import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">Our customers are saying about...</h2>
      <div className="row mt-3 mb-5">
        {
            reviews.map(review => 
            <Review
            review={review}
            ></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;
