import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Cols/sidebar";
import MainCol from "../Cols/main";

function MainLayout({ user, tags, children, onPrivacyChange, handleEditProfileName, handleEditProfileBio, history }) {
  return (
    <div className={style.main}>
      <div />
      <Sidebar
        user={user}
        tags={tags}
        onPrivacyChange={onPrivacyChange}
        handleEditProfileName={handleEditProfileName}
        handleEditProfileBio={handleEditProfileBio}
        history={history}
      />
      <MainCol style={style.mainBorders}>{children}</MainCol>
      <div />
    </div>
  );
}

export default MainLayout;
