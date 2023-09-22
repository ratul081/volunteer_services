import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderMobile = ({ order,handleDeleted }) => {
  const {
    _id,
    service_id,
    service_name,
    phoneNumber,
    name,
    endDate,
    startDate,
  } = order;
  const [bookedService, setBookedService] = useState([]);
  useEffect(() => {
    const unsubscribe = () => {
      fetch(`http://localhost:5000/services/${service_id}`)
        .then((res) => res.json())
        .then((data) => setBookedService(data.data));
    };
    return () => {
      return unsubscribe();
    };
  }, [service_id]);
  return (
    <div className="border-gray-200 border-b pb-10">
      <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
        <div>
          {bookedService?.photoURL && (
            <img
              className="my-10 pl-4 lg:pl-10 2xl:pl-20"
              src={bookedService?.photoURL}
              alt={`${service_name}`}
            />
          )}
        </div>
      </div>
      <div className="px-4 mt-6  justify-between w-full flex lg:jusitfy-center items-center">
        <div>
          <p className="w-36 text-sm leading-6 text-gray-800">{service_name}</p>
        </div>
        <div>
          <p className="text-xs font-semibold leading-4 text-gray-800">
            {startDate} to {endDate}
          </p>
        </div>
      </div>
      <div className="px-4 mt-6  justify-between w-full flex jusitfy-center items-center">
        <div>
          <Link
            to={`/services/${service_id}`}
            className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800">
            View details
          </Link>
        </div>
        <div>
          <button
            onClick={() => handleDeleted(_id)}
            className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
            <p>Remove Item</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderMobile;
