import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* Outlet renders the child route elements */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
