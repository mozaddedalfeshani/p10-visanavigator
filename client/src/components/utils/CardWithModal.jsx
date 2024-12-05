import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CardWithModal = ({ item }) => {
  const { _id } = item;
  console.log(_id);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/visas/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Visa Info has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={item.country_image} alt={item.country_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.country_name}</h2>
        <p>Visa Type: {item.visa_type}</p>
        <p>Processing Time: {item.processing_time} days</p>
        <p>Fee: {item.fee}</p>
        <p>Validity: {item.validity} days</p>
        <p>Application Method: {item.application_method}</p>
        <div className="card-actions justify-end">
          <Link to={`/updateVisa/${_id}`} className="btn btn-primary">
            Update
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardWithModal;
