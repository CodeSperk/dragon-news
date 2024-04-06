import { createBrowserRouter } from "react-router-dom";
import Layout from "../root/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivateRout from "../hooks/PrivateRout";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('/news.json'),
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/news/:id",
        element:<PrivateRout><NewsDetails></NewsDetails></PrivateRout>
      }
    ]
  }
]);

export default routes;