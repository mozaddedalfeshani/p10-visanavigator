import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Link to="/" className="btn">
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
