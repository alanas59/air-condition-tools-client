import React from "react";
import CountUp from "react-countup";
import { HiOutlineUserGroup, HiStar, HiTrendingUp } from "react-icons/hi";
import "./Business.css";

const Business = () => {
  return (
     <div className="container my-5">
     <h2 className="text-center my-3">Business Summary</h2>
      <div className="row justify-content-around">
        {/* section-1 */}
        <div className="col-lg-3 text-center shadow rounded py-4 mt-2">
          <p>
            <HiOutlineUserGroup className="icon" />
          </p>
          <CountUp suffix="+ Customers" className="fs-5" end={100} />
        </div>
        {/* section-2*/}
        <div className="col-lg-3 text-center shadow rounded py-4 mt-2">
          <p>
            <HiStar className="icon" />
          </p>
          <CountUp className="fs-5" suffix="K+ Reviews" end={100} />
        </div>
        {/* section-2*/}
        <div className="col-lg-3 text-center shadow rounded py-4 mt-2">
          <p><HiTrendingUp className="icon" /></p>
          <CountUp className="fs-5" suffix="M+ Annual revenue" end={100} />
        </div>
      </div>
    </div>
  );
};

export default Business;
