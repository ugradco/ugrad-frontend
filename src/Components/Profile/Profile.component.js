import React from "react";
import ThemeButton from "../ThemeButton";
import Photo from "../Photo";
import styles from "./Profile.module.css";
import IOSSwitch from "./IOSSwitch.component";

function Profile({ user, onSubmit }) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Photo />
        <div className={styles.header}>
          <span className={styles.name}>{user.name}</span> <span className={styles.name}>{user.department}</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <IOSSwitch />
          <a className={styles.publicity}>Public </a>
        </div>
        <ThemeButton className={styles.signOutButton} onClick={onSubmit}>
          Sign Out
        </ThemeButton>
      </div>
    </div>
  );
}
export default Profile;
