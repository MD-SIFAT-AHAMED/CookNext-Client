import React from "react";
import { FaClock, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body bg-gray-100">
        <h2 className="card-title font-bold text-xl text-green-800">{recipe.title}</h2>
        <p>
          <strong>Instructions:</strong> {recipe.instructions}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
          <span>
            <FaClock size={20} className="inline mr-1" /> {recipe.prepTime} mins
          </span>
          <span>
            <FaHeart size={20} className="inline mr-1 text-red-500" />{" "}
            {recipe.likes}
          </span>
        </div>

        <p className="mt-2">
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>

        <div className="flex flex-wrap gap-1 mt-2">
          {recipe.categories.map((cat, i) => (
            <div key={i} className="badge badge-outline">
              {cat}
            </div>
          ))}
        </div>

        <div className="card-actions mt-4">
          <Link
            to={`/recipes/${recipe._id}`}
            className="btn w-full font-semibold text-white rounded-2xl bg-green-500/80 hover:bg-white hover:border-green-400 hover:text-black"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
