import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
    );
};

export default AuthLayout;