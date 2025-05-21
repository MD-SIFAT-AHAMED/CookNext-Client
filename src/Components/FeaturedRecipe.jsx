import React from "react";
import featureImg from '../assets/garlic.jpg';
const FeaturedRecipe = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <img
        src={featureImg}
          alt="Featured Recipe"
          className="rounded-2xl shadow-lg w-full md:w-1/2"
        />
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            Featured <span className="text-orange-500">Recipe:</span> Garlic Butter Chicken
          </h3>
          <p className="text-gray-700 mb-6">
            Juicy chicken thighs cooked in a flavorful garlic butter sauce,
            perfect for weeknight dinners. Ready in under 30 minutes!
          </p>
          <ul className="list-disc list-inside mb-4 text-left text-gray-600">
            <li>Prep time: 10 mins</li>
            <li>Cook time: 20 mins</li>
            <li>Serves: 4 people</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
