import React, { useState } from "react";
import Header from "../Header/Header.component";
import Main from "../Main/Main.component";
import Footer from "../Footer/Footer.component";
import style from "../Layout/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={style.layout}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
