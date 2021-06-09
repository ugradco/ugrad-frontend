import React from "react";
import { API_ENDPOINTS } from "Constants/api.constants";
import { apiGenerator } from "Utils";
import { getUserAPI } from "Actions/User.actions";
import { logoutAPI } from "Actions/Login.actions";
import { connect } from "react-redux";
import { Ugrad } from "../icons";
import Logo from "Assets/images/logo.png";
import styles from "./sidebar.module.css";
import TopicsBar from "../TopicsBar/TopicsBar.component";
import Profile from "../Profile/ProfileHud.component";
import routes from "Constants/route.constants";

function Sidebar({ user, getUserAPI, logoutAPI, tags, onPrivacyChange, history }) {
  const editUserName = (value) => {
    apiGenerator("patch")(API_ENDPOINTS.UPDATE(user._id), {
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
    apiGenerator("patch")(API_ENDPOINTS.UPDATE(user._id), {
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
        <img
          className={styles.logo}
          src={Logo}
          onClick={() => {
            history.push(routes.home);
          }}
        />
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
