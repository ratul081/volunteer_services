import React from "react";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>
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
                  {...register("name", {})}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {})}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", {})}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <p>Choose your participation type:</p>
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    {...register("participationType")}
                    type="radio"
                    value="During Event"
                  />
                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    <span className="text-sm">During Event</span>
                  </label>
                </div>
                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    {...register("participationType")}
                    type="radio"
                    value="Full-time"
                  />
                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    <span className="text-sm">Full-time</span>
                  </label>
                </div>
                <div>
                  <input
                    className="peer sr-only"
                    id="option3"
                    {...register("participationType")}
                    type="radio"
                    value="Part-time"
                  />
                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                    <span className="text-sm">Part-time</span>
                  </label>
                </div>
              </div>
              <div>
                <p className="my-2">Leave some massage:</p>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  type="text"
                  {...register("message", {})}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  defaultValue={""}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
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
