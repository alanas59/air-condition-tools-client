import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";

const Address = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center my-5">Our Address</h2>
      <div className="row">
        <div className="col-lg-4  d-flex mb-4">
          <div className="me-2">
            <FaMapMarkerAlt style={{ fontSize: "30px" }} />
          </div>
          <div className="">
            <p>
              194 Glen Street <br />
              Louisville, KY 40299
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <img src="https://i.ibb.co/6gkY6cW/logo.png" alt="" />
        </div>
        <div className="col-lg-4 d-flex mb-4">
          <div className="me-2">
            <HiPhone style={{ fontSize: "30px" }} />
          </div>
          <div>
            <small>Call Now Fast Service</small>
            <p className="fw-bold">+ 1 800-234-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
