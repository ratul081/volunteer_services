import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderTable = ({ order, handleDeleted }) => {
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
    <tbody className="w-full text-center">
      <tr className="border-gray-200 border-b ">
        <th>
          {bookedService?.photoURL && (
            <img
              className="my-10 pl-4 h-28 lg:pl-10 2xl:pl-20"
              src={bookedService?.photoURL}
              alt={`${service_name}`}
            />
          )}
        </th>
        <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
          <p className=" text-base leading-4 text-gray-800">
            {order?.service_name}
          </p>
        </th>
        <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
          <p>
            Duration: {startDate} to {endDate}
          </p>
        </th>
        <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
          <Link
            to={`/services/${service_id}`}
            className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">
            View details
          </Link>
        </th>
        <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
          <button
            onClick={() => handleDeleted(_id)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
            <p>Remove Item</p>
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default OrderTable;
