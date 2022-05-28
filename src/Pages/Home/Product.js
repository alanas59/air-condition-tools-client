import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();
  const { product } = props;
  const { _id, name, img, description, order, quantity, price } = product;

  const handleOrder = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="col-lg-4 mt-4">
      <div className="card p-2 h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <h4>Price:${price}</h4>
          <h4>Order:{order}</h4>
          <h4>Quantity:{quantity}</h4>
          <button
            className="btn btn-info mt-2"
            onClick={() => handleOrder(_id)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
