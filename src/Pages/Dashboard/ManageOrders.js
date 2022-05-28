import React, { useEffect, useState } from "react";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("https://sheltered-bastion-67310.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [success]);
  console.log(success);
  return (
    <div>
      <h4 style={{ color: "#CB4695" }}>Manage Orders</h4>
      <table className="table shadow rounded mt-4">
        <thead>
          <tr>
            <th scope="col">Customer email</th>
            <th scope="col">ProductId</th>
            <th scope="col">PaymentId</th>
            <th scope="col">Payment</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <ManageOrder
              order={order}
              success={success}
              setSuccess={setSuccess}
            ></ManageOrder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
