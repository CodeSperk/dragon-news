import { createBrowserRouter } from "react-router-dom";
import Layout from "../root/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/login",
        element:<Login></Login>
      }
    ]
  }
]);

export default routes;