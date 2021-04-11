import React from "react";

import styles from "./style.module.css";
import Photo from "../Photo";
import IconButton from "../Button/icon";
import * as Icon from "../icons";
import CommentModal from "../CommentModal/CommentModal.component";

function Post({ favoriteCount, text, user, comments }) {
  return (
    <div className={styles.feed}>
      <div className={styles.post}>
        {/* avatar */}
        <div className={styles.avatar}>
          <Photo src={user.profile_image_url_https} />
          <div className={styles.header}>
            <span className={styles.name}>{user.alias}</span> <span>{user.shortBio}</span>
          </div>
          <IconButton className={styles.reportButton}>
            <Icon.Report />
          </IconButton>
        </div>

        {/* body */}
        <div className={styles.body}>
          {/* up vote */}
          <IconButton className={styles.upButton}>
            <Icon.Upvote />
          </IconButton>
          {favoriteCount && <span>{favoriteCount}</span>}
          <div className={styles.content}>{text}</div>
        </div>
      </div>
      <div className={styles.comments}>
        {comments &&
          comments.map((content) => {
            return (
              <CommentModal
                inputType="existing"
                inputValue={content.message}
                author={content.user && content.user.alias}
              />
            );
          })}
        <CommentModal inputType="new" placeholder="Write a comment..." />
      </div>
    </div>
  );
}

export default Post;
