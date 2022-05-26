import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user]);
  return (
    <div>
      <h2>My Orders{orders.length}</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">OrderId</th>
            <th scope="col">ProductId</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order,index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order._id}</td>
              <td>{order.productId}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              {
                 !order?.paid ?
                 <td className="d-flex">
                    <button 
                    className="btn btn-info me-2"
                    >Pay</button>
                    <button 
                    className="btn btn-danger"
                    >Cancel</button>
                 </td>
                 :
                 <td>
                      <button className="btn btn-warning">Paid</button>
                 </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
