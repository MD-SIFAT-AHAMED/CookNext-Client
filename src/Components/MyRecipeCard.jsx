
import { FaClock, FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const RecipeCard = ({ recipe , handlerDeleteRecipe }) => {
  
  return (
    <>
    <div className="card bg-base-100 shadow-xl transition hover:shadow-2xl ">
      <figure>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48 w-full object-cover rounded-t-xl"
        />
      </figure>

      <div className="card-body bg-gray-50 rounded-b-xl space-y-2">
        <h2 className="card-title text-xl font-bold text-green-800">
          {recipe.title}
        </h2>

        <p>
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>

        <p>
          <strong>Instructions:</strong> {recipe.instructions}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>
            <FaClock size={20} className="inline mr-1" /> {recipe.prepTime} mins
          </span>
          <span>
            <FaHeart size={20} className="inline mr-1 text-red-500" /> {recipe.likes}
          </span>
        </div>

        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>

        <div className="flex flex-wrap gap-1">
          {recipe.categories.map((cat, i) => (
            <div key={i} className="badge badge-outline">
              {cat}
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="card-actions mt-4 flex flex-col gap-2">

          <div className="flex justify-between gap-2">
            <button
              className="btn flex-1 bg-yellow-400 text-white hover:bg-yellow-500"
            >
              <FaEdit size={18} className="mr-2" /> Update
            </button>

            <button
              onClick={()=>handlerDeleteRecipe(recipe._id)}
              className="btn flex-1 bg-red-500 text-white hover:bg-red-600"
            >
              <FaTrash size={15} className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RecipeCard;
