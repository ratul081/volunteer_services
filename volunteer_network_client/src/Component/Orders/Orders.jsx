import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import OrderTable from "./OrderTable";
import OrderMobile from "./OrderMobile";
import toast from "react-hot-toast";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [agree, setAgree] = useState(null);
  // const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data.data));
  }, [user?.email]);
  const handleDeleted = (id) => {
    console.log("🚀 ~ file: Orders.jsx:20 ~ handleDeleted ~ id:", id);
    fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ file: Orders.jsx:25 ~ .then ~ data:", data);
        if (data.deletedCount > 0) {
          toast.success("Order deleted successfully");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
          // setRefresh(!refresh);
        }
      });
  };
  return (
    <div className="lg:m-12 py-12">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="py-4 font-bold text-center text-lg">
            Are you sure you want to delete this order?
          </p>
          <form
            className="space-x-6 flex flex-row justify-center"
            method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => setAgree(true)} className="btn">
              Yes
            </button>
            <button onClick={() => setAgree(false)} className="btn">
              No
            </button>
          </form>
        </div>
      </dialog>
      {/* Desktop Responsive Start */}
      <div className="hidden sm:flex flex-col justify-start items-start">
        <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Favourites
          </h1>
          <p className="text-base leading-4 text-gray-600 pb-1">
            ({orders.length} Items)
          </p>
        </div>
        <table className="w-full mt-16 whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-center py-6 bg-gray-50 border-gray-200 border-b ">
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                YOUR PRODUCT
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                DESCRIPTION
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                PRICE
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                MORE OPTIONS
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10">
                REMOVE
              </th>
            </tr>
          </thead>
          {orders &&
            orders.map((order) => (
              <OrderTable
                key={order._id}
                order={order}
                handleDeleted={handleDeleted}></OrderTable>
            ))}
        </table>
      </div>
      {/* Desktop Responsive End */}
      {/* Mobile Responsive Start */}
      <div className=" flex justify-center items-center">
        <div className="sm:hidden flex flex-col justify-start items-start">
          <div className="p-0 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
            <p className="text-4xl font-semibold leading-9 text-gray-800">
              Favourites
            </p>
            <p className="text-base leading-4 text-gray-600 pb-1">
              ({orders.length} Items)
            </p>
          </div>
          {orders.map((order) => (
            <OrderMobile
              key={order._id}
              handleDeleted={handleDeleted}
              order={order}></OrderMobile>
          ))}
        </div>
      </div>
      {/* Mobile Responsive End */}
    </div>
  );
};

export default Orders;
