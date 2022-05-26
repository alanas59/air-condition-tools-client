import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const [modal,setModal] = useState(false);
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
          if (data.deletedCount) {
            toast("Successfully Deleted");
            setSuccess(!success);
          }
        });
    }
  };
  const handleModal = () =>{
    setModal(!modal);
  }
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

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleModal}
      >
        Launch demo modal
      </button>
      {
         modal ?
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
                 Modal title
               </h5>
               <button
                 type="button"
                 class="btn-close"
                 data-bs-dismiss="modal"
                 aria-label="Close"
               ></button>
             </div>
             <div class="modal-body">...</div>
             <div class="modal-footer">
               <button
                 type="button"
                 class="btn btn-secondary"
                 data-bs-dismiss="modal"
               >
                 Close
               </button>
               <button type="button" class="btn btn-primary">
                 Save changes
               </button>
             </div>
           </div>
         </div>
       </div> : ''
      }
     
    </div>
  );
};

export default ManageProducts;
