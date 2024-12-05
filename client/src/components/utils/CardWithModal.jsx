import React from "react";

const CardWithModal = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={item.country_image} alt={item.country_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.country_name}</h2>
        <p>Visa Type: {item.visa_type}</p>
        <p>Processing Time: {item.processing_time} days</p>
        <p>Fee: {item.fee}</p>
        <p>Validity: {item.validity} days</p>
        <p>Application Method: {item.application_method}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-secondary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardWithModal;
