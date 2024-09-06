import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h2>This is error page</h2>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  
  export default router;