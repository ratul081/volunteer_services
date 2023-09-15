import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Share/Header";
import Footer from "../Share/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <>
    <Toaster
      position="top-center"
      reverseOrder={false}
      ></Toaster>
      <div style={{ minHeight: "80dvh" }} className="mx-4">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
