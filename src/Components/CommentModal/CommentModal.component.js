import React from "react";

import styles from "./CommentModal.module.css";
import Photo from "../Photo/index";
import ThemeButton from "../ThemeButton/index";

function CommentModal({ input, placeholder, onClick = () => {}, onChange = () => {}, onSubmit = () => {} }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <textarea className={styles.textarea} name="" placeholder={placeholder} value={input} onChange={onChange} />
          </div>
        </div>
      </div>
      <ThemeButton className={styles.postButton} onClick={onSubmit}>
        Post
      </ThemeButton>
    </div>
  );
}

export default CommentModal;
