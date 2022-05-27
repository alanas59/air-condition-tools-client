import React, { useEffect, useState } from "react";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const [orders,setOrders] = useState([]);
  const [success,setSuccess] = useState(false);
  useEffect(()=>{
      fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  },[success])
  return (
    <div>
      <h4 style={{ color:"#CB4695" }}>Manage Orders</h4>
      <table class="table shadow rounded mt-4">
        <thead>
          <tr>
            <th scope="col">Customer email</th>
            <th scope="col">ProductId</th>
            <th scope="col">PaymentId</th>
            <th scope="col">Payment</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
              orders.map(order => 
              <ManageOrder
              order={order}
              setSuccess={setSuccess}
              ></ManageOrder>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
