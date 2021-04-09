import React from "react";

import styles from "./CommentModal.module.css";
import Photo from "../Photo/index";
import ThemeButton from "../ThemeButton/index";

function CommentModal({ input, placeholder, onClick = () => {}, onChange = () => {}, onSubmit = () => {} }) {
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
          <textarea className={styles.textarea} name="" placeholder={placeholder} value={input} onChange={onChange} />
          <ThemeButton className={styles.postButton} onClick={onSubmit}>
            Post
          </ThemeButton>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
