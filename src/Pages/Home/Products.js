import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-bastion-67310.herokuapp.com/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center">Our Tools</h2>
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
