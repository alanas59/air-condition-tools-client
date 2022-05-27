import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Review = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleReview = (event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const description = event.target.description.value;
    const review = {
        name:user.displayName,
        email:user.email,
        rating,
        description
    }
    fetch("http://localhost:5000/review", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            toast.success('Thanks for your review');
        }
      });
  };
  return (
    <div className="col-lg-8 shadow rounded p-4">
      <h2 style={{color:'#CB4695'}}>Review</h2>
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
