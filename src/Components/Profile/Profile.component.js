import React from "react";
import EdiText from "react-editext";
import ThemeButton from "../ThemeButton";
import Button from "../Button/Button.component";
import Photo from "../Photo";
import styles from "./Profile.module.css";
import IOSSwitch from "./IOSSwitch.component";

function Profile({ user, onSubmit, onPrivacyChange, handleEditProfileName, handleEditProfileBio }) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Photo />
        <div className={styles.header}>
          {/* // TODO: shortBio + publicity after fixing the backend */}
          {user && (
            <EdiText
              className={styles.name}
              value={user.name}
              onSave={handleEditProfileName}
              type="text"
              editButtonClassName="custom-edit-button"
              editButtonContent="..."
            />
          )}
          {user && (
            <EdiText
              className={styles.name}
              value={user.shortBio}
              onSave={handleEditProfileBio}
              type="text"
              editButtonClassName="custom-edit-button"
              editButtonContent="..."
            />
          )}
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
