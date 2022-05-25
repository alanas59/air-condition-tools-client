import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MakeAdmin = () => {
 const [users,setUsers] = useState([]);
 const [success,setSuccess] = useState(false);
 useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [success]);

  const handleMakeAdmin = id =>{
      if(window.confirm('Do you want make admin?')){
         fetch(`http://localhost:5000/makeAdmin/${id}`,{
             method:'PATCH',
             headers: {
                "Content-Type": "application/json",
              }
         })
         .then(res=>res.json())
         .then(data => {
             if(data){
                 toast('Made admin');
                 setSuccess(!success);
             }
         })
      }
  }
  return (
    <div>
      <h4>Users{users.length}</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Make Admin</th>
          </tr>
        </thead>
        <tbody>
          {
              users.map((user,index) =>  
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {
                       user.role !== 'admin' ? 
                       <button 
                       onClick={()=>handleMakeAdmin(user._id)}
                       className="btn btn-info"
                       >Make admin</button> 
                       : ''
                    }
                </td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
