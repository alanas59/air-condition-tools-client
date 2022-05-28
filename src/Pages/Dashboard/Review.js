import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Review = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  console.log(user);
  const onSubmit = (data) => {
    const review = {
      name: user.displayName,
      email: user.email,
      rating: data.rating,
      description: data.description,
    };
    fetch("https://sheltered-bastion-67310.herokuapp.com/review", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Thanks for your review");
        }
      });
  };

  return (
    <div className="col-lg-8 shadow rounded p-4">
      <h2 style={{ color: "#CB4695" }}>Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Please rate
          </label>
          <input
            type="number"
            {...register("rating")}
            min="1"
            max="5"
            required
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Write Something
          </label>
          <textarea
            className="form-control"
            {...register("description")}
            required
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
