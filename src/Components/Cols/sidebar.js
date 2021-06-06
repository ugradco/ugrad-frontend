import React from "react";
import { API_ENDPOINTS } from "Constants/api.constants";
import { apiGenerator } from "Utils";
import { getUserAPI } from "Actions/User.actions";
import { logoutAPI } from "Actions/Login.actions";
import { connect } from "react-redux";
import { UgradLogo } from "../icons";
import styles from "./sidebar.module.css";
import TopicsBar from "../TopicsBar/TopicsBar.component";
import Profile from "../Profile/Profile.component";

function Sidebar({ user, getUserAPI, logoutAPI, tags, onPrivacyChange, history }) {
  const editUserName = (value) => {
    apiGenerator("patch")(API_ENDPOINTS.UPDATE(user.userCTX.user._id), {
      name: value,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your patch operation.");
        }
        getUserAPI();
      })
      .catch((error) => {
        console.error("There has been a problem with your patch operation:", error);
      });
  };

  const editshortBio = (value) => {
    apiGenerator("patch")(API_ENDPOINTS.UPDATE(user.userCTX.user._id), {
      shortBio: value,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your patch operation.");
        }
        getUserAPI();
      })
      .catch((error) => {
        console.error("There has been a problem with your patch operation:", error);
      });
  };

  const handleEditProfileName = (value) => {
    editUserName(value);
  };

  const handleEditProfileBio = (value) => {
    editshortBio(value);
  };

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
          onSignOut={logoutAPI}
          onPrivacyChange={onPrivacyChange}
          handleEditProfileName={handleEditProfileName}
          handleEditProfileBio={handleEditProfileBio}
        />
      </div>
    </div>
  );
}

const actionCreators = {
  getUserAPI,
  logoutAPI,
};

export default connect(null, actionCreators)(Sidebar);
