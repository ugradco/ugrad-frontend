import React from "react";

import styles from "./style.module.css";
import Stack from "../Components/stack";
import Photo from "../Components/Photo";
import Input from "../Components/InputBox/Input.component";
import IconButton from "../Components/Button/icon";
import { Close, Upvote } from "../Components/icons";

function PostPane({ onModalClose, inputType, inputPlaceHolder, inputValue, onInputChange, onKeyPress }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.post}>
        <div className={styles.avatar}>
          <Photo />
          <div className={styles.header}>
            <span className={styles.name}>uname</span> <span className={styles.name}>ubio</span>
          </div>
          <IconButton className={styles.closeButton} onClick={onModalClose}>
            <Close color="#FFFFFF" />
          </IconButton>
        </div>
        <div className={styles.input}>
          <div />
          <Input
            style={styles.inputLarge}
            name={inputType}
            type={inputType}
            placeholder={inputPlaceHolder}
            value={inputValue}
            onChange={onInputChange}
            onKeyPress={onKeyPress}
          />
          <div />
        </div>
        <IconButton className={styles.closeButton} onClick={onModalClose}>
          <span color="#FFFFFFF">Post</span>
        </IconButton>
      </div>
    </div>
  );
}

export default PostPane;
