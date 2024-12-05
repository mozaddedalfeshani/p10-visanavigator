import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateVisa = () => {
  // console the params from the URL
  const data = useLoaderData();
  console.log(data);

  return <div>updata visa </div>;
};

export default UpdateVisa;
