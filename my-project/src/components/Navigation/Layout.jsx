// src/components/Navigation/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SignButton from './SignButton';

const Layout = () => {
  return (
    <div className="layout">
      <div className="main-content">
        <SignButton/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
