import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Service from "./Service";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [services, setServices] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const unsubscribe = () => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data.data));
    };
    return () => {
      return unsubscribe();
    };
  }, [refresh]);
  console.log(services);
  return (
    <div>
      <div className="text-center text-xl  space-y-6">
        <p className="text-5xl my-12">We grow by helping people in need</p>
        <form className="space-x-2" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="input input-bordered w-full max-w-xs"
            defaultValue=""
            {...register("search")}
          />
          <button className="btn text-xl normal-case btn-success" type="submit" >Search</button>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-12 mx-12 my-24 place-items-center">
        {services.map((service) => (
          <Service
          key={service._id}
          service={service}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Home;
