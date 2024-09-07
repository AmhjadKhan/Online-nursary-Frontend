import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/Aboutus/AboutUs"
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/product/Product";
import ContactUs from "../pages/contactus/ContactUs";
import Cart from "../pages/Cart/Cart";

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
          path:'/cart',
          element:<Cart />
        },
       {
        path:'/about-us',
        element:<AboutUs />
       },
       {
        path:'/contact-us',
        element:<ContactUs />
       },
       {
         path:'/dashboard',
         element:<Dashboard />
       }
      ],
    },
  ]);
  
  export default router;