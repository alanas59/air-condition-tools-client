import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [success,setSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [success]);
  const handleDelete = (id) => {
    if (window.confirm("Do you want delte?")) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
           if(data.deletedCount){
             toast('Successfully Deleted');
             setSuccess(!success);
           }
        });
    }
  };
  return (
    <div>
      <h4>Manage Products</h4>
      <table class="table">
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
          {products.map((product) => (
            <tr>
              <td>
                <img style={{ width: "100px" }} src={product.img} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
