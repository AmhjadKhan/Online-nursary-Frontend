import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/Aboutus/AboutUs"
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/product/product";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/products",
          element:<Product />
        },
       {
        path:'/about-us',
        element:<AboutUs />
       },
       {
         path:'/dashboard',
         element:<Dashboard />
       }
      ],
    },
  ]);
  
  export default router;