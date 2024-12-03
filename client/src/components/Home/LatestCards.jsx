import React from "react";
import { useNavigate } from "react-router-dom";

const visaCards = [
  {
    id: 1,
    country: "United States",
    countryImage: "https://example.com/usa.jpg",
    visaType: "Tourist Visa",
    processingTime: "10-15 business days",
    fee: "$160",
    validity: "6 months",
    applicationMethod: "Online",
  },
  {
    id: 2,
    country: "Canada",
    countryImage: "https://example.com/canada.jpg",
    visaType: "Student Visa",
    processingTime: "4-6 weeks",
    fee: "$150",
    validity: "Length of study program + 90 days",
    applicationMethod: "Online",
  },
  {
    id: 3,
    country: "United Kingdom",
    countryImage: "https://example.com/uk.jpg",
    visaType: "Work Visa",
    processingTime: "3-8 weeks",
    fee: "$300",
    validity: "5 years",
    applicationMethod: "Online",
  },
  {
    id: 4,
    country: "Australia",
    countryImage: "https://example.com/australia.jpg",
    visaType: "Tourist Visa",
    processingTime: "20 business days",
    fee: "$140",
    validity: "12 months",
    applicationMethod: "Online",
  },
  {
    id: 5,
    country: "Germany",
    countryImage: "https://example.com/germany.jpg",
    visaType: "Business Visa",
    processingTime: "10-15 business days",
    fee: "$80",
    validity: "90 days",
    applicationMethod: "In-person",
  },
  {
    id: 6,
    country: "Japan",
    countryImage: "https://example.com/japan.jpg",
    visaType: "Tourist Visa",
    processingTime: "5-10 business days",
    fee: "$30",
    validity: "90 days",
    applicationMethod: "Online",
  },
];

const LatestCards = () => {
  const navigate = useNavigate();

  const handleSeeDetails = (visa) => {
    navigate(`/visa-details/${visa.country}`);
  };

  return (
    <div className="flex justify-center">
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

export default LatestCards;
