import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/Aboutus/AboutUs"

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
        path:'/about-us',
        element:<AboutUs />
       }
      ],
    },
  ]);
  
  export default router;