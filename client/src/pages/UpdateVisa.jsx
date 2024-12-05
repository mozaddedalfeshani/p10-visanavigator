import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateVisa = () => {
  // console the params from the URL
  const data = useLoaderData();
  //disturcture the data

  return <div>updata visa {data._id}</div>;
};

export default UpdateVisa;
