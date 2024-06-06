// src/components/Navigation/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SignButton from './SignButton';
import TopNav from './TopNav';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Title from '../Title/Title';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Layout = () => {
  return (
    <div className="layout">
      <div className="main-content">
        <TopNav />
        <Hero />
        <div className="section-divider"></div> 
        <Title subTitle="Get to know company" title="About Us" />
        <SignButton />
        <About />
        <div className="section-divider"></div> 
        <Title subTitle="Apply here" title="Postings" />
        <Outlet />
        <div className="section-divider"></div> 
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
