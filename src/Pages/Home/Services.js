import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-5">
      <h2 className="text-center my-5">Our Services</h2>
      <div className="row">
         {
              services.map(service => 
                <Service
                service={service}
                ></Service>)
         }
      </div>
    </div>
  );
};

export default Services;
