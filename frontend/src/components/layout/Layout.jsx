import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "@/components/common/Header.jsx";
import Footer from "@/components/common/Footer.jsx";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
