import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L2CogCzzWb5ebzSfSId9ulpBtV5mGSiaf2jfi5kXltfG99tKSWr8Zv0mvloAkUKLv4eSlduSha775AlIBvP0FtQ00T8a2XCEb"
);
const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrder(data);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-lg-12 border p-4">
        <p>Hello,{order.uname ? order?.uname : "Customer"}</p>
        <p>Please pay : {order.price}</p>
      </div>
      <div className="col-lg-8 border mt-3 p-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
