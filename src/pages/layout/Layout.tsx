// import Footer from "@/components/footer/Footer";
// import Header from "@/components/header/Header";
// import NetworkStatus from "@/components/network-status/NetworkStatus";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
