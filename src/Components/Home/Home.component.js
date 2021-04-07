import React from "react";
import style from "./Home.module.css";
import Layout from "../Layout/Layout.component";
import Post from "../Post";

function HomeComponent({ children, commentVal }) {
  const user = { name: "Furkan", department: "EEE/CS" };
  return (
    <div className={style.main}>
      <Layout type="main">
        <Post favorite_count={120} text="Merhaba arkadaslar! Hava uzucu." user={user} commentVal={commentVal} />
      </Layout>
    </div>
  );
}

export default HomeComponent;
