import React from "react";

const Review = () => {
  const handleReview = event =>{
      event.preventDefault();
      const rating = event.target.rating.value;
      const description = event.target.description.value;
      console.log(rating,description);
  }
  return (
    <div className="col-lg-8 mt-2 border border-info p-4">
      <h2>Review</h2>
      <form onSubmit={handleReview}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Please rate
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            class="form-control"
            id="exampleFormControlInput1"
           
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
           Write Something
          </label>
          <textarea
            class="form-control"
            name="description"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
};

export default Review;
