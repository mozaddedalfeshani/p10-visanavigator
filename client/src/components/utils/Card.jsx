import React from "react";

const Card = ({ visaCards, handleSeeDetails }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {visaCards.map((visa) => (
          <div key={visa.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={visa.countryImage} alt={visa.country} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{visa.country}</h2>
              <p>Visa Type: {visa.visaType}</p>
              <p>Processing Time: {visa.processingTime}</p>
              <p>Fee: {visa.fee}</p>
              <p>Validity: {visa.validity}</p>
              <p>Application Method: {visa.applicationMethod}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handleSeeDetails(visa)}>
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
