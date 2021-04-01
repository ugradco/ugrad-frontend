import React, { useState } from "react";
import Main from "../Main/Main.component";
import style from "./Layout.module.css";
import Sidebar from "../Cols/sidebar";
import Extra from "../Cols/extra";

function LoginLayout({ children }) {
  return (
    <div className={style.layout}>
      <Main>{children}</Main>
    </div>
  );
}

function MainLayout({ children }) {
  return (
    <div className={style.layout}>
      <Sidebar />
      <Main>{children}</Main>
      <Extra />
    </div>
  );
}

function Layout({ type, children }) {
  const CompLayout = type === "login" ? LoginLayout : MainLayout;
  return <CompLayout className={style.layout}>{children}</CompLayout>;
}

export default Layout;
