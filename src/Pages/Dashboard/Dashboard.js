import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-lg-4">
          <ul class="list-group">
            <li class="list-group-item">
              <Link to="/dashboard/my-orders">My Orders</Link>
            </li>
            <li class="list-group-item">
              <Link to="/dashboard/add-review">Add a reivew</Link>
            </li>
            <li class="list-group-item">
              <Link to="/dashboard/my-profile">My Profile</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-8 ">
          <h2 className="">Your Dashboard</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
