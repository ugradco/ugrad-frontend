import React from "react";
import Button from "Components/Button/Button.component";
import IconButton from "Components/Button/icon";
import { Close } from "Components/icons";
import Avatar from "Components/Avatar";
import InputBox from "Components/InputBox/InputBox.component";

import styles from "./style.module.css";

function UserProfileModal({ user, tags, setShowUserProfileModal, setIsUserPublic, updateUserAPI, onSignOut }) {
  const [userName, setUserName] = React.useState(user.name);
  const [shortBio, setShortBio] = React.useState(user.shortBio);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  let tagOptions = [];

  if (tags) {
    for (let i = 0; i < tags.tags.length; i += 1) {
      tagOptions = [...tagOptions, { value: tags.tags[i].name, label: tags.tags[i].name }];
    }
  }

  const updateUserData = () => {
    updateUserAPI({ userId: user._id, name: userName, shortBio });

    setIsUserPublic(true);
    setIsSubmitting(false);
    setShowUserProfileModal(false);
  };

  const onSubmit = () => {
    if (userName) {
      setIsSubmitting(true);
      updateUserData();
    }
  };

  const limitAlphaCharsPlus = (event) => {
    const value = String.fromCharCode(event.which);
    const pattern = new RegExp(/[a-zåä\-çşğı.?_& ]/i);

    if (!pattern.test(value)) {
      event.preventDefault();
    }
  };

  const limitAlphaChars = (event) => {
    const value = String.fromCharCode(event.which);
    const pattern = new RegExp(/[a-zåäçşğı. ]/i);

    if (!pattern.test(value)) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.post}>
        <IconButton
          className={styles.closeButton}
          onClick={() => {
            setShowUserProfileModal(false);
          }}
        >
          <Close />
        </IconButton>
        <Avatar className={styles.avatar} name={userName} size={120} />

        <InputBox
          style={styles.inputSmall}
          type="email"
          maxLength={25}
          placeholder="Your name"
          value={userName}
          onKeyPress={limitAlphaChars}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <InputBox
          style={styles.inputSmall}
          type="email"
          maxLength={40}
          placeholder="Your short bio"
          value={shortBio}
          onKeyPress={limitAlphaCharsPlus}
          onChange={(event) => {
            setShortBio(event.target.value);
          }}
        />
        <div>
          <Button className={styles.postButton} onClick={onSubmit} disabled={isSubmitting}>
            Update
          </Button>
        </div>
        <div className={styles.divider} />
        <Button className={styles.signOutButton} onClick={onSignOut}>
          Sign out
        </Button>
      </div>
      )
    </div>
  );
}

export default UserProfileModal;
