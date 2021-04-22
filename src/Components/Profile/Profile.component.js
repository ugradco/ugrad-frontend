import React from "react";
import ThemeButton from "../ThemeButton";
import Photo from "../Photo";
import styles from "./Profile.module.css";
import IOSSwitch from "./IOSSwitch.component";

function Profile({ user, onSubmit, onPrivacyChange }) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Photo />
        <div className={styles.header}>
          {/* // TODO: shortBio + publicity after fixing the backend */}
          {user && <span className={styles.name}> {user.name} </span>}
          {user && <span className={styles.name}> {user.shortBio} </span>}
          <span className={styles.name} />
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <IOSSwitch onPrivacyChange={onPrivacyChange} />
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
