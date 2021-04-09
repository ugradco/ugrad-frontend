import React from "react";
import cn from "classnames";
import styles from "./sidebar.module.css";
import TopicsBar from "../TopicsBar/TopicsBar.component";
import Profile from "../Profile/Profile.component";

function Sidebar({ user }) {
  return (
    <div className={cn(styles.sidebar)}>
      <div className={styles.sideTitle}>Followed Topics</div>
      <TopicsBar />

      <div className={styles.profile}>
        <Profile user={user} />
      </div>
    </div>
  );
}

export default Sidebar;
