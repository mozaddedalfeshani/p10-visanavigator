import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../components/common/Card";
const AllVisas = () => {
  const [visas, setVisas] = useState([]);

  const [value, setValue] = useState("visas");
  useEffect(() => {
    const fetchVisas = async () => {
      const response = await fetch(`https://backend-tau-vert-85.vercel.app/${value}`);
      const data = await response.json();
      setVisas(data);
    };
    fetchVisas();
  }, []);

  const handleVisaTypeChange = async (e) => {
    setValue(e.target.value);
    const response = await fetch(
      `https://backend-tau-vert-85.vercel.app/type/${e.target.value}`
    );
    console.log(e.target.value);

    const data = await response.json();
    setVisas(data);
  };

  const handleSeeDetails = (visaId) => {
    // Add navigation or modal logic here
  };

  return (
    <div className="flex flex-col my-5 items-center justify-center container mx-auto">
      <h1 className="text-3xl font-bold my-2">All Visas</h1>
      <div className="my-5 flex flex-row justify-end items-center w-full">
        <label htmlFor="visas" className="mr-2">
          Select a visa type:
        </label>
        <select
          id="visas"
          name="visas"
          value={value}
          onChange={handleVisaTypeChange}
          className="select select-bordered w-full max-w-xs">
          <option value="visas">All Visas</option>
          <option value="touristvisas">Tourist Visa</option>
          <option value="studentvisas">Student Visa</option>
          <option value="workvisas">Work Visa</option>
          <option value="businessvisas">Business Visa</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {visas.map((visa) => (
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

export default AllVisas;
