import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [user, loading] = useAuthState(auth);
  const [minOrder, setMinOrder] = useState(0);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMinOrder(data.order);
      });
  }, []);
  const handleSubmit = event =>{
     event.preventDefault();
     const uname = user.displayName;
     const email = user.email;
     const quantity = event.target.quantity.value;
     const address = event.target.address.value;
     const phone = event.target.phone.value;
     const price = product.price;
     const productId = id;
     const orderNow = {
        uname,
        email,
        quantity,
        address,
        phone,
        price,
        productName:product.name,
        status:false,
        productId
     }
     fetch('http://localhost:5000/order',{
       method:'POST',
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(orderNow)
     })
     .then(res => res.json())
     .then(data => {
       if(data.insertedId){
         toast('Order successfully done.')
       }
     })
  }
  const handleOrder = (event) => {
    console.log(product.order, product.quantity);
    const newOrder = parseInt(event.target.value);

    if (newOrder < product.order) {
      setError("Your order in less than minimum order");
    } else if (newOrder > product.quantity) {
      setError("Your order is greater than available product");
    } else {
      setError("");
    }
    setMinOrder(newOrder);
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6">
          <div class="shadow-sm text-center">
            <img src={product.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">{product.description}</p>
              <h4>Minimum order : {product.order}</h4>
              <h4>Avaiable : {product.quantity}</h4>
              <h4>Price: ${product.price}</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 shadow-sm rounded p-4">
          {/* user */}

          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <h2>Order Now</h2>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  disabled
                  value={user?.displayName}
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={user?.email}
                  disabled
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Your Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  id="exampleFormControlInput1"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Your Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Order quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  class="form-control"
                  value={minOrder}
                  onChange={handleOrder}
                  id="exampleFormControlInput1"
                />
              </div>
              <p className="text-danger mt-2">{error}</p>

              <button
                disabled={
                  minOrder < product.order || minOrder > product.quantity
                }
                className="btn  btn-primary w-100 text-white"
              >
                Order Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
