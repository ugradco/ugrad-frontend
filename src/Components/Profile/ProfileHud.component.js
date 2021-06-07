import React from "react";
import EdiText from "react-editext";
import ThemeButton from "../ThemeButton";
import Photo from "../Avatar";
import styles from "./ProfileHud.module.css";
import IOSSwitch from "./IOSSwitch.component";

function ProfileHud({ user, onSignOut, onPrivacyChange, handleEditProfileName, handleEditProfileBio }) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Photo name={user && user.name} />
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
              editOnViewClick
              showButtonsOnHover
            />
          )}
          {user && (
            <EdiText
              className={styles.shortBio}
              value={user.shortBio}
              onSave={handleEditProfileBio}
              type="text"
              editButtonClassName="custom-edit-button"
              editButtonContent="..."
              editOnViewClick
              showButtonsOnHover
            />
          )}
          <span className={styles.name} />
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <IOSSwitch onPrivacyChange={onPrivacyChange} />
          <p className={styles.publicity}>Public </p>
        </div>
        <ThemeButton className={styles.signOutButton} onClick={onSignOut}>
          Sign Out
        </ThemeButton>
      </div>
    </div>
  );
}
export default ProfileHud;
