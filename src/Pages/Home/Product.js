import React from "react";

const Product = (props) => {
  const { product } = props;
  const { name, img, description, order, quantity, price } = product;
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
          <button className="btn btn-info mt-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
