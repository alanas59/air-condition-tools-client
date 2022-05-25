import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { email } = useParams();
  const [user, setUser] = useState({});
  const [education,setEducation] = useState("");
  const [location,setLocation] = useState("");
  const [phone,setPhone] = useState("");
  const [profile,setProfile] = useState("");
  const handleEducation = event =>{
      setEducation(event.target.value);
  }
  const handleLocation = event =>{
      setLocation(event.target.value);
  }
  const handlePhone= event =>{
      setPhone(event.target.value);
  }
  const handleProfile = event =>{
      setProfile(event.target.value);
  }
  
  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setEducation(data.education);
        setLocation(data.location);
        setPhone(data.phone);
        setProfile(data.profile);
       
      });
  }, []);
  const handleSubmit = event =>{
      event.preventDefault();
      const data = {
          name:user?.name,
          email:user?.email,
          education,
          location,
          phone,
          profile

      }

      fetch("http://localhost:5000/userUpdate", {
        method: "PATCH", // or 'PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
             console.log(result)
             toast.success('Updated');
          }
        });
  }
  
  return (
    <div>
      <h4>Update</h4>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            disabled
            value={user?.name}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            disabled
            value={user?.email}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Your Education
          </label>
          <input
            type="text"
            name="education"
            value={education}
            onChange={handleEducation}
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            Your location
          </label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocation}
            class="form-control"
            id="exampleFormControlInput2"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            Phone number
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handlePhone}
            class="form-control"
            id="exampleFormControlInput2"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">
            Linkedin profile link
          </label>
          <input
            type="text"
            name="profile"
            value={profile}
            onChange={handleProfile}
            class="form-control"
            id="exampleFormControlInput2"
          />
        </div>
        <input className="btn btn-info" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
