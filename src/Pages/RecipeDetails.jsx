import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { FaClock, FaHeart, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import AuthContext from "../Context/AuthContext";
const RecipeDetails = () => {
  const {user} =use(AuthContext);
  const initialRecipe = useLoaderData();
  const [recipe,setRecipe] = useState(initialRecipe);
  console.log(user);

  const hanlderRecipeLike=()=>{
    if(recipe.userEmail === user.email)
    {
      toast.error("You can't like your own recipe ");
      return;
    }
    const updateLike = Number(recipe.likes) + Number(1);

    fetch(`http://localhost:5000/recipes/${recipe._id}`,{
      method:"PATCH",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({likes:updateLike})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount)
      {
        toast.success('Thanks for your interest!');
        const updateRecipe = {...recipe,likes:updateLike};
        setRecipe(updateRecipe);
        // setRecipe(prev=> ({...prev,likes:updateLike}))
      }
    })
  }
  return (
    <div className="max-w-screen-2xl place-items-center mx-auto w-11/12">
      <div className="card bg-base-100 shadow-xl ">
        <figure className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-100 w-full object-cover rounded-t-xl"
          />
          <div className="absolute top-2 right-2">
            <p className="bg-red-500 text-white px-3 font-semibold  py-1 rounded-2xl">{recipe.likes} people interested in this recipe </p>
          </div>
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
            <span className="text-xl flex items-center" onClick={hanlderRecipeLike}>
              <FaHeart size={30} className="inline mr-1 text-red-500" />
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
