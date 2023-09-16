import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const { title, photoURL, description } = useLoaderData().data;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-12 lg:px-4 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="lg:pr-10 lg:mt-10">
          <h5 className="mb-4 text-3xl lg:text-6xl font-extrabold leading-none">
            {title}
          </h5>
          <p className="mb-6 text-gray-900 text-justify">{description}</p>
          <Link className="btn normal-case text-xl btn-accent">
          Join now
          </Link>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={photoURL}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
