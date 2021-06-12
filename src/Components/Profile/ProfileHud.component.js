import React from "react";
import EdiText from "react-editext";
import ThemeButton from "../ThemeButton";
import Photo from "../Avatar";
import styles from "./ProfileHud.module.css";
import IOSSwitch from "./IOSSwitch.component";

function ProfileHud({ user, onSignOut, onPrivacyChange, isPublic, setShowUserProfileModal }) {
  const activeUserName = user && (isPublic ? user.name : user.alias);

  return (
    <div className={styles.profile}>
      <div
        className={styles.avatar}
        onClick={() => {
          setShowUserProfileModal(true);
        }}
      >
        <Photo name={activeUserName} />
        <div className={styles.header}>
          {/* // TODO: shortBio + publicity after fixing the backend */}
          <p className={styles.name}>{activeUserName}</p>
          {isPublic && <p className={styles.shortBio}>{user.shortBio}</p>}
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <IOSSwitch onPrivacyChange={onPrivacyChange} checked={!isPublic} />
          <p className={styles.publicity}>Anonymous</p>
        </div>
        <ThemeButton className={styles.signOutButton} onClick={onSignOut}>
          Sign Out
        </ThemeButton>
      </div>
    </div>
  );
}
export default ProfileHud;
