import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};
