import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.role);
      });
  }, [user]);
  return (
    <div className="container my-5">
      <h2 className="text-center my-4"><span style={{color:'#5A37CE'}}>Welcome!</span> to your dashboard</h2>
      <div className="row g-4">
        <div className="col-lg-3 shadow  rounded" style={{maxHeight:'400px'}}>
          <ul class="list-group mt-4">
            <li class="list-group-item">
              <Link to="/dashboard/my-profile">My Profile</Link>
            </li>
            {admin !== "admin" ? (
              <>
                <li class="list-group-item">
                  <Link to="/dashboard/my-orders">My Orders</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/dashboard/add-review">Add a reivew</Link>
                </li>
              </>
            ) : (
              <>
                <li class="list-group-item">
                  <Link to="/dashboard/manage-products">Manage Products</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/dashboard/make-admin">Make Admin</Link>
                </li>
                <li class="list-group-item">
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="col-lg-8 ms-2">
         
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
