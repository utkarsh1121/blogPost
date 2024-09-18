import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
// import BlogCard from './component/Card'
export default function Layout() {
  return (
    <>
      <Header />
      <div className="min-h-[450px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
