import React from "react";

import styles from "./WriteCommentModal.module.css";
import Photo from "../Avatar/index";
import ThemeButton from "../ThemeButton/index";
import Input from "../InputBox/Input.component";

function WriteCommentModal({
  user,
  inputType,
  inputValue,
  placeholder,
  onInputChange = () => {},
  onSubmit = () => {},
}) {
  if (inputType === "new") {
    return (
      <div className={styles.comments}>
        <div className={styles.modal}>
          <div className={styles.avatar}>
            <Photo name={user && user.alias} />
          </div>
          <div />
          <div className={styles.commentBox}>
            <Input
              style={styles.textarea}
              name={inputType}
              type={inputType}
              placeholder={placeholder}
              value={inputValue}
              onChange={onInputChange}
            />
            <ThemeButton className={styles.postButton} onClick={onSubmit}>
              Post
            </ThemeButton>
          </div>
        </div>
      </div>
    );
  }
}

export default WriteCommentModal;
