import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main className="main-content">
        {/* The Outlet component renders the current page's content */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
