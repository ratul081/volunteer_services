import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Share/Header";
import Footer from "../Share/Footer";
import { Toaster } from "react-hot-toast";
import Sidebar from "../Others/Sidebar";

const Main = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Sidebar>
        <div style={{ minHeight: "80dvh" }} className="mx-4">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </Sidebar>
      <Footer></Footer>
    </>
  );
};

export default Main;
