import React from "react";
import { useLoaderData } from "react-router";
import { FaClock, FaHeart, FaUser } from "react-icons/fa";
const RecipeDetails = () => {
  const recipe = useLoaderData();
  console.log(recipe);
  return (
    <div className="max-w-screen-2xl place-items-center mx-auto w-11/12">
      <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-100 w-full object-cover rounded-t-xl"
          />
        </figure>

        <div className="card-body bg-gray-50 rounded-b-xl space-y-3">
          {/* Title */}
          <h2 className="card-title text-xl font-bold text-green-800">
            {recipe.title}
          </h2>

          {/* Ingredients */}
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </p>

          {/* Instructions */}
          <p>
            <strong>Instructions:</strong> {recipe.instructions}
          </p>

          {/* Cuisine */}
          <div>
            <strong>Cuisine Type:</strong>
            <span>{recipe.cuisine}</span>
          </div>

          {/* Preparation Time and Likes */}
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              <FaClock size={20} className="inline mr-1" /> {recipe.prepTime} mins
            </span>
            <span>
              <FaHeart size={20} className="inline mr-1 text-red-500" />
              {recipe.likes}
            </span>
          </div>

          {/* Categories */}
          <div className="mt-2">
            <strong>Categories:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {recipe.categories.map((cat, i) => (
                <div key={i} className="badge badge-outline">
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
