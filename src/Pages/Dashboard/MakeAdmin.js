import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("https://sheltered-bastion-67310.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [success]);

  const handleMakeAdmin = (id) => {
    fetch(`https://sheltered-bastion-67310.herokuapp.com/makeAdmin/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Made admin");
          setSuccess(!success);
        }
      });
  };
  const handleDelete = (id) => {
    const url = `https://sheltered-bastion-67310.herokuapp.com/makeAdmin/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast("Deleted");
          setSuccess(!success);
        }
      });
  };
  return (
    <div className="shadow rounded p-4">
      <h4 style={{ color: "#CB4695" }}>Users</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Make Admin</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role !== "admin" ? (
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    onClick={() => setUserId(user._id)}
                    className="btn btn-info"
                  >
                    Make admin
                  </button>
                ) : (
                  ""
                )}
              </td>
              <td>
                <button
                  onClick={() => setUserId(user._id)}
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Do you want to delete this user?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                no
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleDelete(userId)}
              >
                yes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal2 */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Do you want to make admin this user?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                no
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleMakeAdmin(userId)}
              >
                yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
