import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="row">
      <div className="col-lg-6 mx-auto my-5 border p-5">
        <h2>Please login</h2>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput2"
            />
          </div>
        <input className="btn btn-info" type="submit" value="Login" />
        </form>
        <p className="my-2">New to this website? <Link to="/register">Please register</Link></p>
      </div>
    </div>
  );
};

export default Login;
