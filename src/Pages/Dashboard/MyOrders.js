import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user, success]);
  const handleCancel = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast("Successfully canceled your order");
          setSuccess(!success);
        }
      });
  };
  const handlePay = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };
  return (
    <div className="p-4">
      <h2 style={{ color: "#CB4695" }}>My Orders</h2>
      <table class="table shadow rounded mt-4">
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
                    onClick={() => handlePay(order._id)}
                    className="btn btn-info me-2"
                  >
                    Pay
                  </button>
                  <button
                    onClick={() => setOrderId(order._id)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
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
      {/* modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Do you want to cancel this order?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                no
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-primary"
                onClick={() => handleCancel(orderId)}
              >
                yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
