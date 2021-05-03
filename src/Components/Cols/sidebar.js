import React from "react";
import cn from "classnames";
import styles from "./sidebar.module.css";
import TopicsBar from "../TopicsBar/TopicsBar.component";
import Profile from "../Profile/Profile.component";
import { UgradLogo } from "../icons";

function Sidebar({ user, tags, onPrivacyChange, handleEditProfileName, handleEditProfileBio, history }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <UgradLogo />
        ugrad
      </div>
      <TopicsBar style={styles.topicsBar} tags={tags} history={history} />

      <div className={styles.profile}>
        <Profile
          user={user}
          onPrivacyChange={onPrivacyChange}
          handleEditProfileName={handleEditProfileName}
          handleEditProfileBio={handleEditProfileBio}
        />
      </div>
    </div>
  );
}

export default Sidebar;
