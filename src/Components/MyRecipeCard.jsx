import { useState } from "react";
import { FaClock, FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router";

const MyRecipeCard = ({ recipe,recipes,setRecipe, handlerDeleteRecipe }) => {
  const [openModal, setOpenModal] = useState(null);

  const handlerUpdateRecipe = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const updateRecipeData = Object.fromEntries(fromData.entries());
    updateRecipeData.categories= fromData.getAll("categories"),

    fetch(`http://localhost:5000/recipes/${openModal._id}`,{
      method:"PATCH",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updateRecipeData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount)
      {
        toast.success("Recipe Update Successfully");

        const updateRecipe = {...recipe,...updateRecipeData};
        const updateRecipes = recipes.map( r => r._id === updateRecipe._id ? updateRecipe : r);
        setRecipe(updateRecipes);
        
      }
    })

    document.getElementById(`modal_${recipe._id}`)?.close();
    setOpenModal(null);
  };

  const modalOpen = (id) => {
    setOpenModal(id);
    console.log(id);
    document.getElementById(`modal_${recipe._id}`).showModal();
  };

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
              <FaClock size={20} className="inline mr-1" /> {recipe.prepTime}{" "}
              mins
            </span>
            <span>
              <FaHeart size={20} className="inline mr-1 text-red-500" />{" "}
              {recipe.likes}
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
                onClick={() => modalOpen(recipe)}
                // onClick={() => setOpenModal((prev) => !prev)}
                className="btn flex-1 bg-yellow-400 text-white hover:bg-yellow-500"
              >
                <FaEdit size={18} className="mr-2" /> Update
              </button>

              <button
                onClick={() => handlerDeleteRecipe(recipe._id)}
                className="btn flex-1 bg-red-500 text-white hover:bg-red-600"
              >
                <FaTrash size={15} className="mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal box */}
      <dialog id={`modal_${recipe._id}`} className="modal">
        <div className="modal-box mx-auto w-11/12 max-w-5xl">
          <div className="modal-action">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">
                Update <span className="text-orange-400"> Recipe</span>
              </h2>
              <form
                onSubmit={handlerUpdateRecipe}
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
                <div className="md:col-span-2 space-x-3 text-center">
                  <button
                    type="submit"
                    className="btn bg-orange-400 !text-white rounded-lg w-40"
                  >
                    Update Recipe
                  </button>
                  <button
                    type="button"
                    className="btn bg-red-400 !text-white rounded-lg w-40"
                    onClick={() =>
                      document.getElementById(`modal_${recipe._id}`)?.close()
                    }
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MyRecipeCard;
