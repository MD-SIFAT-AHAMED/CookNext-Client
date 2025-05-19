import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
            <header className='max-w-screen-2xl mx-auto w-11/12'>
                <Navbar/>
            </header>
            <main className='max-w-screen-2xl mx-auto w-11/12'>
                <Outlet/>
            </main>
            <footer className='max-w-screen-2xl mx-auto w-11/12'>
                <Footer/>
            </footer>
        </>
    );
};

export default MainLayout;