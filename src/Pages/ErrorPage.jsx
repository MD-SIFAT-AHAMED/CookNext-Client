import React from 'react';
import error from '../assets/error.jpg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const ErrorPage = () => {
    return (
       <div className='max-w-screen-2xl mx-auto w-11/12'>
       <Navbar/>
         <div className='min-h-screen-md flex items-center justify-center'>
            <figure>
                <img className='w-150' src={error} alt="Error Image" />
            </figure>
        </div>
        <Footer/>
       </div>
    );
};

export default ErrorPage;