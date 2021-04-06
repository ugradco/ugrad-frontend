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
    <article className={styles.post}>
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
      // TODO: align comments section and up vote count.
      <div className={styles.comments}>
        <div className={styles.content}>{text}</div>
      </div>
    </article>
  );
}

export default Post;
