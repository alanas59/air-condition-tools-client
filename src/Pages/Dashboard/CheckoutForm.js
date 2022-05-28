import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { order } = props;
  const { price, email, _id } = order;

  useEffect(() => {
    if (price) {
      fetch(
        "https://sheltered-bastion-67310.herokuapp.com/create-payment-intent",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ price }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("clientSecret", data?.clientSecret);
          setClientSecret(data?.clientSecret);
        });
    } else {
      console.log("No");
    }
  }, [price]);

  console.log(price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats!your payment is confirmed.");
      const payment = {
        productId: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://sheltered-bastion-67310.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Order anas", data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info mt-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-danger mt-3">{cardError}</p>}
      {success && (
        <>
          <p className="text-primary mt-3">{success}</p>
          <p className="mt-3">
            Your transactionId :
            <span className="text-success">{transactionId}</span>
          </p>
        </>
      )}
    </>
  );
};

export default CheckoutForm;
