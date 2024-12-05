import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../common/Card";

const LatestCards = () => {
  const navigate = useNavigate();
  const [visaCards, setVisaCards] = useState([]);

  useEffect(() => {
    fetch("https://backend-tau-vert-85.vercel.app/latestCards")
      .then((res) => res.json())
      .then((data) => {
        setVisaCards(data);
      });
  }, []);

  return (
    <div className="flex justify-center items-center my-8 flex-col">
      <h1 className="text-4xl font-bold my-4">Latest Visa </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {visaCards.map((visa) => (
          <Card key={visa._id} visaCard={visa} />
        ))}
      </div>
    </div>
  );
};

export default LatestCards;
