import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../modules/header/header"
import Footer from '../modules/footer/footer';

const Main = () => {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;