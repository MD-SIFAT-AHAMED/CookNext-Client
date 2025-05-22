import React from "react";
import { Link, useLoaderData } from "react-router";
import RecipeCard from "./RecipeCard";

const PopularRecipe = () => {
  const popularRecipe = useLoaderData();
  // console.log(popularRecipe);
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto w-11/12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our <span className="text-orange-400">Recipes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRecipe.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
        <div className="flex mt-10 justify-center items-center">
          <Link to={"/allRecipe"} className="px-4 py-2 text-lg font-bold bg-orange-400 text-white rounded-xl text-center">
            All Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularRecipe;
