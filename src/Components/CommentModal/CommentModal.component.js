import React from "react";

import styles from "./CommentModal.module.css";
import Photo from "../Photo/index";
import ThemeButton from "../ThemeButton/index";
import Input from "../InputBox/Input.component";
import IconButton from "../Button/icon";
import * as Icon from "../icons";

function CommentModal({ inputValue, author }) {
  return (
    <div className={styles.modal}>
      <div className={styles.avatar}>
        <Photo />
        <div className={styles.header}>
          <span className={styles.name}>{author.alias}</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{inputValue}</div>
      </div>
    </div>
  );
}

export default CommentModal;
