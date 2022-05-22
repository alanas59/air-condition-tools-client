import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center text-primary">Our Tools</h2>
      <div className="container">
        <div className="row">
          {
              products.map(product => <Product
              product={product}
              ></Product>)
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
