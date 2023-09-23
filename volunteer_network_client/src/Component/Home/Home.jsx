import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Service from "./Service";

const Home = () => {
  const [services, setServices] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const url = `https://volunteer-network-server-ratul-44.vercel.app/services?page=${page}&size=${size}`;
    console.log(`page= ${page} size= ${size}`);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ file: Home.jsx:26 ~ .then ~ data:", data)
        setCount(data.data.count);
        setRefresh(true);
        setServices(data.data.services);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  return (
    <div>
      <div className="text-center text-xl space-y-6">
        <p className="text-5xl my-12">We grow by helping people in need</p>
        <form className="space-x-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered w-full max-w-xs"
            {...register("search")}
          />
          <button
            className="btn text-xl normal-case btn-success my-4"
            type="submit">
            Search
          </button>
        </form>
      </div>
      {(services.length===0) ? (
        <>
          <p className="text-7xl flex justify-center m-12">No data found</p>
        </>
      ) : (
        <>
          {refresh ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 lg:gap-12 mx-4 md:mx-8 lg:mx-12 my-8 md:my-12 lg:my-24 place-items-center">
                {services.map((service) => (
                  <Service key={service._id} service={service}></Service>
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center min-h-screen">
              <span className="text-5xl loading loading-spinner loading-lg"></span>
            </div>
          )}
        </>
      )}
      {/* <div className="text-center"> selected page= {page}</div> */}
      {services.length && (
        <div className="join flex flex-row justify-center my-3">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              className="mx-2 text-lg join-item btn"
              onClick={() => setPage(number)}>
              {number + 1}
            </button>
          ))}
          <select
            defaultValue={5}
            onChange={(event) => setSize(event.target.value)}
            className="select select-bordered">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Home;
