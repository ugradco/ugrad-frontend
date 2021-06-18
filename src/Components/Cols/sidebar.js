import React, { useState } from "react";
import { API_ENDPOINTS } from "Constants/api.constants";
import { apiGenerator } from "Utils";
import { getUserAPI, setIsUserPublic, updateUserAPI } from "Actions/User.actions";
import { logoutAPI } from "Actions/Login.actions";
import { connect } from "react-redux";
import routes from "Constants/route.constants";
import Avatar from "Components/Avatar";
import IOSSwitch from "Components/Profile/IOSSwitch.component";
import Logo from "Assets/images/logo.png";
import ULogo from "Assets/images/u-logo.png";
import UserProfileModal from "UserProfileModal";
import styles from "./sidebar.module.css";
import TopicsBar from "../TopicsBar/TopicsBar.component";
import ProfileHud from "../Profile/ProfileHud.component";

function Sidebar({ user, getUserAPI, updateUserAPI, logoutAPI, tags, setIsUserPublic, history }) {
  const { isPublic } = user;

  const [showUserProfileModal, setShowUserProfileModal] = useState(false);

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

  const editShortBio = (value) => {
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
    editShortBio(value);
  };

  const onPrivacyChange = () => {
    if (!user.name) {
      setShowUserProfileModal(true);
    } else {
      setIsUserPublic(!isPublic);
    }
  };

  const activeUserName = user && (isPublic ? user.name : user.alias);

  return (
    <>
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
          <ProfileHud
            user={user}
            isPublic={isPublic}
            onSignOut={logoutAPI}
            setShowUserProfileModal={setShowUserProfileModal}
            onPrivacyChange={onPrivacyChange}
            handleEditProfileName={handleEditProfileName}
            handleEditProfileBio={handleEditProfileBio}
          />
        </div>
      </div>
      <div className={styles.sidebarMobile}>
        {/* <img
          className={styles.logoSmall}
          src={ULogo}
          onClick={() => {
            history.push(routes.home);
          }}
        /> */}
        <div
          className={styles.mobileProfile}
          onClick={() => {
            setShowUserProfileModal(true);
          }}
        >
          <Avatar name={activeUserName} />
          <div className={styles.mobileUserContainer}>
            <p className={styles.userName}>{activeUserName}</p>
            {isPublic && <p className={styles.shortBio}>{user.shortBio}</p>}
          </div>
        </div>
        <div className={styles.mobilePublicityContainer}>
          <IOSSwitch onPrivacyChange={onPrivacyChange} checked={!isPublic} />
          <p className={styles.publicity}>Anonymous</p>
        </div>
      </div>
      {showUserProfileModal && (
        <UserProfileModal
          user={user}
          onSignOut={logoutAPI}
          setShowUserProfileModal={setShowUserProfileModal}
          setIsUserPublic={setIsUserPublic}
          getUserAPI={getUserAPI}
          updateUserAPI={updateUserAPI}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const actionCreators = {
  getUserAPI,
  updateUserAPI,
  setIsUserPublic,
  logoutAPI,
};

export default connect(mapStateToProps, actionCreators)(Sidebar);
