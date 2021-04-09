import React from "react";

import styles from "./CommentModal.module.css";
import Photo from "../Photo/index";
import ThemeButton from "../ThemeButton/index";
import Input from "../InputBox/Input.component";

function CommentModal({ inputValue, inputType, placeholder, onInputChange = () => {}, onSubmit = () => {} }) {
  return (
    <div className={styles.comments}>
      <ThemeButton className={styles.commentButton} onClick={onSubmit}>
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

export default CommentModal;
