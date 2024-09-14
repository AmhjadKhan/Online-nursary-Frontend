import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/Aboutus/AboutUs"
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/product/Product";
import ContactUs from "../pages/contactus/ContactUs";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/product/ProductDetails/ProductDetails";
import CartCheckout from "../pages/Cart/CartCheckout";

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
          path: "/product/:id",
          element: <ProductDetails />
        },
        {
          path:'/cart',
          element:<Cart />
        },
        {
          path:'/cart-checkout',
          element:<CartCheckout />
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