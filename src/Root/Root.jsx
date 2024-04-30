import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Header/Footer/Footer';
import Header from '../Shared/Header/Header';

const Root = () => {
    return (
        <div>
             <Header />
           <div className="min-h-[calc(100vh-340px)]">
           <Outlet />
           </div>
            <Footer />
        </div>
    );
};

export default Root;