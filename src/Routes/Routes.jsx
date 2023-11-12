import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home/";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Menu from "../Pages/Menu/Menu/Menu";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        }
      ]
    },
]);

export default router;