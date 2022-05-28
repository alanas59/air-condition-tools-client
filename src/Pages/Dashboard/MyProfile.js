import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const profile = event.target.profile.value;
    const data = {
      name,
      email,
      education,
      location,
      phone,
      profile,
    };
    fetch("https://sheltered-bastion-67310.herokuapp.com/user", {
      method: "PUT", // or 'PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Saved successfully");
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <div className="shadow rounded p-5">
        <h4 style={{ color: "#CB4695" }}>My Profile</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              disabled
              value={user?.displayName}
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              disabled
              value={user?.email}
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Your Education
            </label>
            <input
              type="text"
              name="education"
              required
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">
              Your location
            </label>
            <input
              type="text"
              name="location"
              required
              className="form-control"
              id="exampleFormControlInput2"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              required
              className="form-control"
              id="exampleFormControlInput2"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">
              Linkedin profile link
            </label>
            <input
              type="text"
              name="profile"
              required
              className="form-control"
              id="exampleFormControlInput2"
            />
          </div>
          <input className="btn btn-info" type="submit" value="Save" />
        </form>
        <p className="mt-2">
          <Link to={`/dashboard/update/${user?.email}`}>Update</Link>
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
