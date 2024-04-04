import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-poppins text-[var(--clr-primary)]">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;