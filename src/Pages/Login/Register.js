import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Register = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (user) {
    toast.success("Successfully registered");
    const name = user?.user.displayName;
    const email = user?.user.email;
    console.log(name, email);
    const userData = {
      name: userName,
      email,
    };
    fetch("https://sheltered-bastion-67310.herokuapp.com/user", {
      method: "PUT", // or 'PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("register", data);
        localStorage.setItem("accessToken", data.token);
        navigate("/home");
      });
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    setUserName(name);
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="row">
      <div className="col-lg-6 mx-auto my-5 shadow rounded p-5">
        <h2>Please register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Your name
            </label>
            <input
              type="text"
              name="name"
              required
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              id="exampleFormControlInput2"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput3" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="form-control"
              id="exampleFormControlInput3"
            />
          </div>
          <input className="btn btn-info" type="submit" value="Register" />
        </form>
        <p className="text-danger my-2">{error?.message}</p>
        <p className="my-2">
          Already have an account? <Link to="/login">Please login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
