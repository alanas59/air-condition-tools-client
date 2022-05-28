import React from "react";

const Service = (props) => {
  const { service } = props;
  const { img, title, description } = service;
  return (
    <div className="col-lg-4 text-center">
      <img src={img} alt="" />
      <div className="mt-4">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
