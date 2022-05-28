import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageOrder = (props) => {
  const { order, setSuccess, success } = props;
  const { _id, email, productId, paymentId, paid, status } = order;
  const [orderId, setOrderId] = useState("");

  const handlePending = (id) => {
    fetch(`https://sheltered-bastion-67310.herokuapp.com/order-status/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(!success);
        toast("Shipped");
      });
  };
  const handleDelete = (id) => {
    const url = `https://sheltered-bastion-67310.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(!success);
        toast("Successfully deleted");
      });
  };

  return (
    <>
      <tr>
        <td>{email}</td>
        <td>{productId}</td>
        <td>{paymentId ? paymentId : <p className="text-danger">No</p>}</td>
        <td className="text-warning fw-bold">{paid ? "Paid" : "unpaid"}</td>
        <td>
          {!status ? (
            <button className="btn btn-info" onClick={() => handlePending(_id)}>
              Pending
            </button>
          ) : (
            <span className="text-info fw-bold">Shipped</span>
          )}
        </td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-danger"
            onClick={() => setOrderId(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Do you want to delete this order?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={() => handleDelete(orderId)}
              >
                yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrder;
