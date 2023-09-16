import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";

const Register = () => {
  const { createUser, verifyEmail, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    validate,
    reset,
    getValues,
  } = useForm();
  // console.log(errors);
  const handleSingUp = (data) => {
    const { email, password, firstName, lastName } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("🚀 ~ file: Register.jsx:24 ~ handleSingUp ~ user:", user);
        reset();
        handleUpdateUser(firstName, lastName);
        handleEmailVerification();
        toast.success("An email is sent to you for verification")
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleUpdateUser = (firstName, lastName) => {
    const profile = {
      displayName: firstName + " " + lastName,
    };
    updateUserProfile(profile)
      .then(() => {
        // toast.success("Profile updated successfully");
      })
      .catch((error) => console.error(error));
  };
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        // toast.success("An email is sent to you for verification");
      })
      .catch((error) => console.error(error));
  };
  return (
    <section className="bg-white lg:m-40">
      <div className="lg:grid lg:min-h-full lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:min-h-screen xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="text-white">
              <img
                className="w-32 bg-white p-2"
                src="https://i.ibb.co/dbhrWTs/Group-1329.png"
                alt=""
              />
            </Link>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Squid 🦑
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20">
                <span className="sr-only">Home</span>
                <img
                  className="w-12"
                  src="https://i.ibb.co/dbhrWTs/Group-1329.png"
                  alt=""
                />
              </Link>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(handleSingUp)}
              className="mt-8 grid grid-cols-6 gap-5">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-xl font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "Please enter your first name",
                    maxLength: 100,
                  })}
                  className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-lg">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-xl font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Please enter your last name",
                    maxLength: 100,
                  })}
                  className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-lg">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div className="col-span-6">
                <label className="block text-xl font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-lg">{`${errors.email.message}`}</p>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-xl font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 10,
                      message: "Password must be at least 10 characters",
                    },
                  })}
                  className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.password && (
                  <p className="text-red-500 text-lg">{`${errors.password.message}`}</p>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-xl font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input
                  type="password"
                  placeholder="Re-enter your password"
                  {...register("passwordConfirmation", {
                    validate: (value) =>
                      value === getValues("password") || "Passwords must match",
                    required: validate ? "" : "Passwords must match",
                  })}
                  className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.passwordConfirmation && (
                  <p className="text-red-500 text-lg">{`${errors.passwordConfirmation.message}`}</p>
                )}
              </div>

              <div className="col-span-6">
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-gray-500">
                  By creating an account, you agree to our
                  <Link
                    to="/terms_and_conditions"
                    className="text-gray-700 underline mx-2">
                    Terms and conditions
                  </Link>
                  and
                  <Link
                    to="/privacy_policy"
                    className="text-gray-700 underline mx-2">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3  font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to="/login" className="text-gray-700 underline ml-1">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
