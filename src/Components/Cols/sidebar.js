import React from "react";
import cn from "classnames";
import styles from "./sidebar.module.css";
import TopicsBar from "../TopicsBar/TopicsBar.component";
import Profile from "../Profile/Profile.component";
import { UgradLogo } from "../icons";

function Sidebar({ user }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <UgradLogo />
        ugrad
      </div>
      <TopicsBar />

      <div className={styles.profile}>
        <Profile user={user} />
      </div>
    </div>
  );
}

export default Sidebar;
