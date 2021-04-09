import React, { useState } from "react";
import style from "./Layout.module.css";
import Sidebar from "../Cols/sidebar";
import Extra from "../Cols/extra";
import MainCol from "../Cols/main";

function LoginLayout({ children }) {
  return (
    <div className={style.login}>
      <MainCol>{children}</MainCol>
    </div>
  );
}

function MainLayout({ user = { name: "Furkan Şahbaz", department: "EEE/CS" }, children }) {
  return (
    <div className={style.main}>
      <Sidebar user={user} />
      <MainCol>{children}</MainCol>
      <Extra />
    </div>
  );
}

function Layout({ type, children }) {
  const CompLayout = type === "login" ? LoginLayout : MainLayout;
  return <CompLayout className={style.layout}>{children}</CompLayout>;
}

export default Layout;
