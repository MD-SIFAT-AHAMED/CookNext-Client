import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AllRecipe from "../Pages/AllRecipe";
import AddRecipe from "../Pages/AddRecipe";
import MyRecipe from "../Pages/MyRecipe";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/allRecipe',
                Component:AllRecipe
            },
            {
                path:'/addRecipe',
                Component:AddRecipe
            },
            {
                path:'/myRecipe',
                Component:MyRecipe
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