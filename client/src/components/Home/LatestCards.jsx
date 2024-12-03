import React, { useEffect, useState } from "react";
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
  const [visaCards, setVisaCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/latestCards")
      .then((res) => res.json())
      .then((data) => {
        setVisaCards(data);
      });
  }, []);

  const handleSeeDetails = (visa) => {
    navigate(`/visa-details/${visa.country}`);
  };

  return (
    <div className="flex justify-center">
      {visaCards.length}
      {visaCards.map((visa) => {
        console.log(visa.id);
      })}
          
    </div>
  );
};

export default LatestCards;
