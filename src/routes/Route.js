import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../Checkout/Checkout";
import Main from "../layout/Main";
import Login from "../login/Login";
import Admin from "../pages/admin/Admin";
import Category from "../pages/category/Category";
import Home from "../pages/home/Home";
import Register from "../register/Register";
import PrivateRoute from "./PrivateRoute.js/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/admin',
                element: <PrivateRoute><Admin></Admin></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/category',
                element: <Category></Category>
            }
        ]
    }
])

export default router;