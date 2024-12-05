import React from "react";
import { useHistory } from "react-router-dom";

const AllVisas = () => {
  const history = useHistory();
  const visas = [
    // Example visa data
    { id: 1, name: "Visa A", country: "Country A", type: "Type A" },
    { id: 2, name: "Visa B", country: "Country B", type: "Type B" },
    // ...more visa data
  ];

  const handleSeeDetails = (id) => {
    history.push(`/visa-details/${id}`);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
      {visas.map((visa) => (
        <div key={visa.id} style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
          <h3>{visa.name}</h3>
          <p>Country: {visa.country}</p>
          <p>Type: {visa.type}</p>
          <button onClick={() => handleSeeDetails(visa.id)}>See Details</button>
        </div>
      ))}
    </div>
  );
};

export default AllVisas;
