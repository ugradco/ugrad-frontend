import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Cols/sidebar";
import Extra from "../Cols/extra";
import MainCol from "../Cols/main";

function MainLayout({ user, tags, children, onPrivacyChange, handleEditProfileName, handleEditProfileBio }) {
  return (
    <div className={style.main}>
      <Sidebar
        user={user}
        tags={tags}
        onPrivacyChange={onPrivacyChange}
        handleEditProfileName={handleEditProfileName}
        handleEditProfileBio={handleEditProfileBio}
      />
      <MainCol style={style.mainBorders}>{children}</MainCol>
      <Extra />
    </div>
  );
}

export default MainLayout;
