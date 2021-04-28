import React from "react";

import styles from "./WriteCommentModal.module.css";
import Photo from "../Photo/index";
import ThemeButton from "../ThemeButton/index";
import Input from "../InputBox/Input.component";

function WriteCommentModal({
  inputType,
  inputValue,
  author,
  placeholder,
  onInputChange = () => {},
  onSubmit = () => { },
  onShow = () => { },
}) {
  if (inputType === "new") {
    // console.log(inputValue)
    return (
      <div className={styles.comments}>
        <ThemeButton className={styles.commentButton} onClick={onShow}>
          Comments
        </ThemeButton>

        <div className={styles.modal}>
          <div className={styles.avatar}>
            <Photo />
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
  return (
    <div className={styles.comments}>
      <div className={styles.modal}>
        <span />
        <span>{`${author}:${inputValue}`}</span>
      </div>
    </div>
  );
}

export default WriteCommentModal;
