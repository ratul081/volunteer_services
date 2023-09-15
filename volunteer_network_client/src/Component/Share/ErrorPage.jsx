import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">Opps!</h1>
          <p className="py-6 text-3xl">404 Not found</p>
          <p className="py-6 text-xl">
            The page you are looking for might have been removed had its name
            change or is temporary unavailable
          </p>
          <Link>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
