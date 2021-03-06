import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);
  const [productId, setProductId] = useState("");
  useEffect(() => {
    fetch("https://sheltered-bastion-67310.herokuapp.com/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [success]);
  const handleDelete = (id) => {
    fetch(`https://sheltered-bastion-67310.herokuapp.com/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast("Successfully Deleted");
          setSuccess(!success);
        }
      });
  };
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="shadow rounded p-4">
      <h4 style={{ color: "#CB4695" }}>Manage Products</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr>
              <td>
                <img style={{ width: "100px" }} src={product.img} alt="..." />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  type="button"
                  onClick={() => setProductId(product._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
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
                Do you want to delete this product?
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
                Close
              </button>
              <button
                type="button"
                onClick={() => handleDelete(productId)}
                className="btn btn-primary"
                data-bs-dismiss="modal"
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

export default ManageProducts;
