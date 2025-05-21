import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AllRecipe from "../Pages/AllRecipe";
import AddRecipe from "../Pages/AddRecipe";
import MyRecipe from "../Pages/MyRecipe";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                loader:()=> fetch('http://localhost:5000/recipes/by_like'),
                Component:Home
            },
            {
                path:'/allRecipe',
                loader:()=> fetch('http://localhost:5000/recipes'),
                Component:AllRecipe
            },
            {
                path:'/addRecipe',
                element:<PrivateRoute>
                    <AddRecipe/>
                </PrivateRoute>
            },
            {
                path:'/myRecipe',
                element:<PrivateRoute>
                    <MyRecipe/>
                </PrivateRoute>
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            }
        ]
    }
])

export default router;