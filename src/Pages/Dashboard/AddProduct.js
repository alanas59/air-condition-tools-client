import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleProduct = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const description = event.target.description.value;
      const img = event.target.img.value;
      const order = event.target.order.value;
      const quantity = event.target.quantity.value;
      const price = event.target.price.value; 

      const product = {
         name,
         description,
         img,
         order,
         quantity,
         price
      }
      fetch('http://localhost:5000/product', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
      .then(res => res.json())
      .then(data =>{
          if(data.insertedId){
              toast('Successfully inserted');
              event.target.reset();
          }
      })
  }
  return (
    <div className="shadow rounded p-4">
      <h4 style={{color:'#CB4695'}}>Add a product</h4>
      <form onSubmit={handleProduct}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Product name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Product description
          </label>
          <input
            type="text"
            name="description"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Product image url
          </label>
          <input
            type="text"
            name="img"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Minimum order
          </label>
          <input
            type="number"
            name="order"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Product quantity
          </label>
          <input
            type="number"
            name="quantity"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Product price
          </label>
          <input
            type="number"
            name="price"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" class="btn btn-info">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
