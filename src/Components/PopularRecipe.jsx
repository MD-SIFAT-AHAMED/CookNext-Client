import React from 'react';
import { useLoaderData } from 'react-router';

const PopularRecipe = () => {
    const popularRecipe = useLoaderData();
    console.log(popularRecipe);
    return (
        <div>
            
        </div>
    );
};

export default PopularRecipe;