import React from "react";

import styles from "./style.module.css";
import Photo from "../Photo";
import IconButton from "../Button/icon";
import * as Icon from "../icons";
import WriteCommentModal from "../WriteCommentModal/WriteCommentModal.component";
import CommentModal from "../CommentModal/CommentModal.component";

function Post({ favoriteCount, text, user, comments }) {
  return (
    <div className={styles.feed}>
      <div className={styles.post}>
        {/* avatar */}
        <div className={styles.avatar}>
          <Photo />
          <div className={styles.header}>
            <span className={styles.name}>{user.alias}</span> <span className={styles.name}>{user.shortBio}</span>
          </div>
          <IconButton className={styles.reportButton}>Report</IconButton>
        </div>

        {/* body */}
        <div className={styles.body}>
          {/* up vote */}
          <IconButton className={styles.upButton}>
            <Icon.Upvote />
            Up!
          </IconButton>
          {favoriteCount && <span>{favoriteCount}</span>}
          <div className={styles.content}>{text}</div>
        </div>
      </div>
      <div>
        <WriteCommentModal inputType="new" placeholder="Write a comment..." />
        {comments &&
          comments.map((content) => {
            return (
              content.message && (
                <CommentModal
                  key={content.message}
                  inputValue={content.message}
                  author={content.user && content.user.alias}
                />
              )
            );
          })}
      </div>
    </div>
  );
}

export default Post;
