import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function Layout() {
  
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ScrollToTop />
      <Header />

      <main className="flex-grow w-full max-w-screen-xl mx-auto px-8 sm:px-16 lg:px-4 py-2 lg:py-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
