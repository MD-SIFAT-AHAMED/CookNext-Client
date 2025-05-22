import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "../Components/RecipeCard";

const AllRecipe = () => {
  const initialRecipes = useLoaderData();
  const [recipes, setRecipes] = useState(initialRecipes);
  const [cuisineType, setCuisineType] = useState("");

  useEffect(() => {
    if (cuisineType) {
      const cuisineTypeData = initialRecipes.filter(
        (recipe) => recipe.cuisine === cuisineType
      );
      setRecipes(cuisineTypeData);
    } else {
      setRecipes(initialRecipes);
    }
  }, [cuisineType,initialRecipes]);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto w-11/12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          All <span className="text-orange-400">Recipes</span>
        </h2>
        {/* Filter Dropdown */}
        <div className="w-8/10 mx-auto">
          <select
            onChange={(e) => setCuisineType(e.target.value)}
            className="w-full  mb-4 border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Filter by cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllRecipe;
