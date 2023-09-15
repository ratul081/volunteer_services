import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, photoURL, title, date } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-2xl">
      <img
        className="object-cover rounded-2xl h-80"
        src={photoURL}
        alt={title}
      />

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end">
          <p className="text-lg">{date ? date : "Coming soon"}</p>
          <Link to={`/services/${_id}`}>
            <button className="btn btn-accent normal-case text-lg">
              Book time
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
