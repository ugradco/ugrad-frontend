import React from "react";

import styles from "./style.module.css";
import Photo from "../Photo";
import IconButton from "../Button/icon";
import * as Icon from "../icons";

function Post({ favoriteCount, text, user }) {
  // created_at
  // retweet_count
  // favorite_count
  // retweeted
  // favorited
  // text
  // user.name
  // user.profile_image_url_https
  // user.screen_name

  return (
    <article className={styles.tweet}>
      {/* avatar */}
      <div className={styles.avatar}>
        <Photo src={user.profile_image_url_https} />
      </div>

      <div className={styles.reportButton}>
        <IconButton className={styles.actionButton}>Report</IconButton>
      </div>

      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{user.name}</span> <span>@{user.department}</span> ·{" "}
        </header>

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
          {/* reply */}
          {/* up vote */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.UpVote />
            </IconButton>
            {favoriteCount && <span>{favoriteCount}</span>}
          </div>
        </footer>
      </div>
    </article>
  );
}

export default Post;
