import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageOrder = (props) => {
  const { order, setSuccess, success } = props;
  const { _id, email, productId, paymentId, paid, status } = order;
  const [orderId, setOrderId] = useState("");

  const handlePending = (id) => {
    fetch(`http://localhost:5000/order-status/${id}`, {
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
    const url = `http://localhost:5000/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(!success);
        toast('Successfully deleted')
      });

  };

  return (
    <>
      <tr>
        <td>{email}</td>
        <td>{productId}</td>
        <td>{paymentId}</td>
        <td className="text-warning fw-bold">{paid ? "Paid" : "Unpaid"}</td>
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
           onClick={()=>setOrderId(_id)}
           >Delete</button>
        </td>
      </tr>
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
                Do you want to delete this order?
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
                No
              </button>
              <button 
               type="button"
               data-bs-dismiss="modal"
               class="btn btn-primary"
               onClick={()=>handleDelete(orderId)}
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
