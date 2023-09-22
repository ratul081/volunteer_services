import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { data } from "autoprefixer";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  console.log("🚀 ~ file: CheckOut.jsx:8 ~ CheckOut ~ user:", user);
  // const [] = useState(true);

  const { _id, title, description } = useLoaderData().data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (details) => {
    const { email, endDate, message, name, phoneNumber, startDate } = details;
    const order = {
      name,
      email,
      service_id: _id,
      service_name: title,
      startDate,
      endDate,
      message,
      phoneNumber,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Service added successfully");
      });
  };
  return (
    <section className="">
      <div className="text-center font-semibold text-5xl my-20">
        Please fill this additional information
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 bg-gray-100">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 grid justify-center lg:my-24">
            <p className="text-5xl">{title}</p>
            <p className="max-w-xl text-justify text-xl">{description}</p>
            <div className="mt-8">
              <a className="text-2xl font-bold text-pink-600">0151 475 4450</a>
              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full rounded-lg border-gray-200 p-3 text-lg"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-600 text-lg mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    disabled
                    {...register("email", { required: "Email is required" })}
                    className="w-full rounded-lg border-gray-200 p-3 text-lg"
                    defaultValue={user?.email ? user.email : ""}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-lg mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone is required",
                    })}
                    className="w-full rounded-lg border-gray-200 p-3 text-lg"
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-600 text-lg mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-lg">Choose your participation type:</p>
              <div className="font-bold grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    {...register("participationType", {
                      required: "Choose participation type",
                    })}
                    type="radio"
                    value="During Event"
                    tabIndex={-1}
                  />
                  <label
                    htmlFor="option1"
                    tabIndex={0}
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    <span className="text-lg">During Event</span>
                  </label>
                </div>
                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    {...register("participationType", {
                      required: "Choose participation type",
                    })}
                    type="radio"
                    value="Full-time"
                    tabIndex={-1}
                  />
                  <label
                    htmlFor="option2"
                    tabIndex={0}
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    <span className="text-lg">Full-time</span>
                  </label>
                </div>
                <div>
                  <input
                    className="peer sr-only"
                    id="option3"
                    {...register("participationType", {
                      required: "Choose participation type",
                    })}
                    type="radio"
                    value="Part-time"
                    tabIndex={-1}
                  />
                  <label
                    htmlFor="option3"
                    tabIndex={0}
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    <span className="text-lg">Part-time</span>
                  </label>
                  {errors.participationType && (
                    <p className="text-red-600 text-lg mt-1">
                      {errors.participationType.message}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-lg">Choose Duration:</p>
              <div className="grid">
                <div>
                  <input
                    type="date"
                    {...register("startDate", {
                      required: "Please book a date",
                      min: 2023,
                    })}
                    className="block text-lg mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                  <p className="text-lg my-2">To</p>
                  <input
                    type="date"
                    {...register("endDate", {
                      required: "Please book a date",
                      min: 2023,
                    })}
                    className="block text-lg mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                  {(errors.startDate || errors.endDate) && (
                    <p className="text-red-600 text-lg mt-1">
                      {errors.startDate.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-lg my-2">Leave some massage:</p>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  type="text"
                  {...register("message", {})}
                  className="w-full rounded-lg border-gray-200 p-3 text-lg"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  defaultValue={""}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className={`inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto ${errors}`}>
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
