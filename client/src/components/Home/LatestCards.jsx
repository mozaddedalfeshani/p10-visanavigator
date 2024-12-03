import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../utils/Card";

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
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {visaCards.map((visa) => (
          <Card
            key={visa._id}
            visaCard={visa}
            handleSeeDetails={handleSeeDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCards;
