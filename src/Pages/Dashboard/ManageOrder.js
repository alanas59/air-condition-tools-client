import React from "react";
import { toast } from "react-toastify";

const ManageOrder = (props) => {
  const { order,setSuccess} = props;
  const {_id,email,productId,paymentId,paid,status} = order;
  const handlePending = id =>{
     fetch(`http://localhost:5000/order-status/${id}`,{
         method:'PUT',
         headers:{
           'content-type':'application/json'
         }
     })
     .then(res => res.json())
     .then(data => {
         console.log(data);
         setSuccess(true);
         toast('Shipped');
     })
  }
  return (
    <tr>
      <td>{email}</td>
      <td>{productId}</td>
      <td>{paymentId}</td>
      <td className="text-warning fw-bold">{paid ? 'Paid' : 'Unpaid'}</td>
      <td>
        {
          !status ?
          <button 
          className="btn btn-info"
          onClick={()=>handlePending(_id)}
          >Pending</button>
          : <span className="text-danger fw-bold">Shipped</span>
        }
      </td>
    </tr>
  );
};

export default ManageOrder;
