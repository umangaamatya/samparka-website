import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        {/* The Outlet component renders the current page's content */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
