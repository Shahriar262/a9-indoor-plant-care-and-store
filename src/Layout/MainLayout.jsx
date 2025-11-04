import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
           <Navbar />
           <Outlet />
           <Footer /> 
        </div>
    );
};

export default MainLayout;