import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import CardWithModal from "../components/utils/CardWithModal";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/visas/email/${user.email}`
        );
        const data = await response.json();
        // console.log("Data", data);
        setVisas(data);
      } catch (error) {
        // console.error(error);
      }
    };
    fetchData();
  }, [user.email]);

  // console.log(visas); // Log the state after it has been set

  return (
    <div className="flex items-center justify-center py-5">
      {/* <h1>My Added Visas sddd</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {visas.map((visa) => (
          // <div key={visa._id}>
          //   <h3>{visa.email}</h3> {/* Corrected to visa.email */}
          // </div>
          <CardWithModal key={visa._id} item={visa} />
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisas;
