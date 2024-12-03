import React from "react";

const Card = ({ visaCard, handleSeeDetails }) => {
  return (
    <div
      onClick={() => handleSeeDetails(visaCard)}
      className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={visaCard.country_image} alt={visaCard.country_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{visaCard.country_name}</h2>
        <p>Visa Type: {visaCard.visa_type}</p>
        <p>Processing Time: {visaCard.processing_time}</p>
        <p>Fee: ${visaCard.fee}</p>
        <p>Validity: {visaCard.validity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
