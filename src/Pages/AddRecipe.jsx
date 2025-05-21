import React, { use } from "react";
import addBg from "../assets/16245.jpg";
import toast from "react-hot-toast";
import AuthContext from "../Context/AuthContext";

const AddRecipe = () => {
  const {user} = use(AuthContext);
  const handleSubmitAddRecipe = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const addRecipeData = {
      ...Object.fromEntries(fromData.entries()),
      categories: fromData.getAll("categories"),
      userName:user.displayName,
      userEmail:user.email,
    };
    console.log(addRecipeData);

    fetch("http://localhost:5000/recipes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addRecipeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Recipe Added Successfully");
        }
      });
  };
  return (
    <div style={{ backgroundImage: `url(${addBg})` }} className=" bg-cover ">
      <div className="max-w-5xl mx-auto p-6 w-full my-10 bg-gray-100/90 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Add <span className="text-orange-400">New Recipe</span>
        </h2>
        <form
          onSubmit={handleSubmitAddRecipe}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 **:text-black"
        >
          {/* Image */}
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input border-none w-full focus:outline-none input-bordered "
              required
            />
          </div>

          {/* Title */}
          <div>
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className="input border-none focus:outline-none input-bordered w-full"
              required
            />
          </div>

          {/* Ingredients */}
          <div className="md:col-span-2">
            <label className="label">Ingredients</label>
            <textarea
              name="ingredients"
              className="textarea border-none focus:outline-none  w-full"
              required
            />
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <label className="label">Instructions</label>
            <textarea
              name="instructions"
              className="textarea border-none focus:outline-none w-full"
              required
            />
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="label">Cuisine Type</label>
            <select
              name="cuisine"
              className="select border-none select-bordered focus:outline-none w-full"
              required
            >
              <option value="">Select Cuisine</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Preparation Time */}
          <div>
            <label className="label">Preparation Time (minutes)</label>
            <input
              type="number"
              name="prepTime"
              className="input border-none focus:outline-none input-bordered w-full"
              required
            />
          </div>

          {/* Categories */}
          <div>
            <label className="label">Categories</label>
            <div className="flex flex-wrap gap-1">
              {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                (cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="categories"
                      value={cat}
                      className="checkbox focus:outline-none"
                    />
                    {cat}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Like Count */}
          <div>
            <label className="label">Like Count</label>
            <input
              type="number"
              name="likes"
              value={0}
              readOnly
              className="input border-none input-bordered w-full focus:outline-none focus:ring-0 text-center text-sm text-gray-500 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="btn bg-orange-400 !text-white rounded-lg w-40"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
