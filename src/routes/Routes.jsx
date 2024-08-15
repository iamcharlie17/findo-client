import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/HomePage/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Products from "../pages/HomePage/products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/products",
            element: <Products/>
        }
    ]
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);
