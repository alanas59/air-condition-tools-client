import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-3" style={{ color: "#5A37D7" }}>
        My Profile
      </h2>
      <div class="w-50 mx-auto mb-5 shadow rounded" style={{}}>
        <div class="card-body">
          <p>
            Name : <span className="fw-bold">Abdullah Al Anas</span>
          </p>
          <p>
            Email : <span className="fw-bold">alanas7171@gmail.com</span>
          </p>
          <p>
            Education:{" "}
            <span className="fw-bold">Bsc (Engg) in CSE(4th year)</span>
          </p>
          <p className="fw-bold fs-5">My skills : </p>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>React</li>
            <li>Express</li>
            <li>Mongodb</li>
            <li>Firebase</li>
          </ul>
          <p className="fw-bold fs-5">My Projects: </p>
          <p>
            <a href="https://fruits-inventory-f76b8.web.app/">
              My fruits warehouse
            </a>
          </p>
          <p>
            <a href="https://product-analysis-alanas.netlify.app/">
              Product analysis
            </a>
          </p>
          <p>
            <a href="https://convention-center-alanas59.netlify.app/">
              Convention center
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
