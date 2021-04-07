import React from "react";

import styles from "./style.module.css";
import Photo from "../Photo";
import IconButton from "../Button/icon";
import * as Icon from "../icons";
import CommentModal from "../CommentModal/CommentModal.component";

function Post({ favoriteCount, text, user, commentVal }) {
  return (
    <div>
      <article className={styles.input}>
        {/* avatar */}
        <div className={styles.avatar}>
          <Photo src={user.profile_image_url_https} />
        </div>
        {/* body */}
        <div className={styles.body}>
          <div>
            <IconButton className={styles.reportButton}>
              <Icon.Report />
            </IconButton>
          </div>

          <header className={styles.header}>
            <span className={styles.name}>{user.name}</span> <span>@{user.department}</span> ·{" "}
          </header>

          <div className={styles.content}>{text}</div>

          {/* reply */}
          {/* up vote */}
          <div>
            <IconButton className={styles.upButton}>
              <Icon.Upvote />
            </IconButton>
            {favoriteCount && <span>{favoriteCount}</span>}
          </div>
        </div>
      </article>
      <div className={styles.comments}>
        <CommentModal input={commentVal} placeholder="Write a comment..." />
      </div>
    </div>
  );
}

export default Post;
