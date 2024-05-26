// src/components/Navigation/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SignButton from './SignButton';
import TopNav from './TopNav';

const Layout = () => {
  return (
    <div className="layout">
      <div className="main-content">
        <TopNav/>
        <SignButton/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
