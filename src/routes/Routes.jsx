import { createBrowserRouter } from "react-router-dom";
import Layout from "../root/Layout";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  }
]);

export default routes;