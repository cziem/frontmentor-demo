import React from "react";
import Drawer from "../Drawer";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout__main">
      <Drawer />
      <main className="content__main">{children}</main>
    </div>
  );
};

export default Layout;
