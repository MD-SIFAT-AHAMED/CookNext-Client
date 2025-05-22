import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';

const PopularRecipe = () => {
    const popularRecipe = useLoaderData();
    console.log(popularRecipe);
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto w-11/12">
        <h2 className="text-3xl font-bold mb-6 text-center">All <span className="text-orange-400">Recipes</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRecipe.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
        </div>
    );
};

export default PopularRecipe;