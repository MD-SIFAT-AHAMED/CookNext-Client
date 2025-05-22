import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import FeaturedRecipe from '../Components/FeaturedRecipe';
import PopularRecipe from '../Components/PopularRecipe';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularRecipe/>
            <About/>
            <FeaturedRecipe/>
        </div>
    );
};

export default Home;