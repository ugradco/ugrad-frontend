import React from "react";
import cn from "classnames";
import styles from "./Profile.module.css";

import Photo from "../Photo";
import ThemeButton from "../ThemeButton";

function Profile({ user, onSubmit }) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Photo />
        <div className={styles.header}>
          <span className={styles.name}>{user.name}</span> <span>@{user.department}</span>
        </div>
      </div>
      <div className={styles.footer}>
        <ThemeButton className={styles.publicityButton} onClick={onSubmit}>
          Public
        </ThemeButton>
        <ThemeButton className={styles.signOutButton} onClick={onSubmit}>
          Sign Out
        </ThemeButton>
      </div>
    </div>
  );
}
export default Profile;
