import React, { use, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import Spinner from './Spinner';
import MyRecipeCard from '../Components/MyRecipeCard';
import toast from 'react-hot-toast';

const MyRecipe = () => {
    const {user} = use(AuthContext);
    const [recipes,setRecipe] = useState([]);
    const [loading,setLoading]=useState(true);
    console.log(recipes);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/recipes?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setRecipe(data)
        })
        .catch(()=>{
            setLoading(false);
        })
    },[user?.email])

    if(loading)
    {
        return <Spinner/>
    }

    const handlerDeleteRecipe=(id)=>{
    fetch(`http://localhost:5000/recipes/${id}`,{
      method:"DELETE",
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount)
      {
        toast.success("Recipe Delete Succesfully");
        const remainingData = recipes.filter(recipe => recipe._id !== id);
        setRecipe(remainingData);
      }
    })

  }
    return (
        <div className="max-w-screen-2xl mx-auto w-11/12">
        <h2 className="text-3xl font-bold mb-6 text-center">My <span className='text-orange-400'>Recipes</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <MyRecipeCard key={recipe._id} handlerDeleteRecipe={handlerDeleteRecipe} recipe={recipe} />
          ))}
        </div>
      </div>
    );
};

export default MyRecipe;