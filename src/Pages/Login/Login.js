import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  
  if(user || guser){
   
    console.log(guser);
    
    const data = {

    }
    fetch("http://localhost:5000/user", {
      method: "PUT", // or 'PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('login',data);
      });
   
    //navigate('/');
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="row">
      <div className="col-lg-6 mx-auto my-5 border p-5">
        <h2>Please login</h2>
        <form onSubmit={handleLogin}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              class="form-control"
              id="exampleFormControlInput2"
            />
          </div>
          <input className="btn btn-info" type="submit" value="Login" />
        </form>
        <p className="my-2 text-danger">{error?.message || gerror?.message}</p>
        <p className="my-2">
          New to this website? <Link to="/register">Please register</Link>
        </p>
        <div className="text-center mt-4">
          <button 
          className="btn btn-primary"
          onClick={() => signInWithGoogle()}
          >Google sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
