import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [success,setSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user,success]);
  const handleCancel = (id) => {
    if (window.confirm("Do you cancel your order")) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount){
              toast('Successfully canceled your order');
              setSuccess(!success);
          }
        });
    }
  };
  const handlePay = id =>{
    navigate(`/dashboard/payment/${id}`)
  }
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
          {orders.map((order, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order._id}</td>
              <td>{order.productId}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              {!order?.paid ? (
                <td className="d-flex">
                  <button 
                  onClick={()=>handlePay(order._id)}
                  className="btn btn-info me-2">Pay</button>
                  <button
                    onClick={() => handleCancel(order._id)}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td>
              ) : (
                <td>
                  <button className="btn btn-warning">Paid</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
