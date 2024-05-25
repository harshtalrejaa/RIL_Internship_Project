// src/components/Navigation/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
