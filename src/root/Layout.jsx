import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;