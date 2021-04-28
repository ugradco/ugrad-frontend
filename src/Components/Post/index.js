import React from "react";

import styles from "./style.module.css";
import Photo from "../Photo";
import IconButton from "../Button/icon";
import * as Icon from "../icons";
import WriteCommentModal from "../WriteCommentModal/WriteCommentModal.component";
import CommentModal from "../CommentModal/CommentModal.component";

function Post({ upCount, text, user, comments, checked, upClicked, sendComment, onCommentChange, inputValue }) {
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
          <IconButton className={styles.upButton} text="Up" count={upCount} selected={checked} onClick={upClicked}>
            {checked && <Icon.Upvote fill="#343264" />}
            {!checked && <Icon.Upvote />}
          </IconButton>

          <div className={styles.content}>{text}</div>
        </div>
      </div>
      <div>
        <WriteCommentModal inputType="new" inputValue={inputValue} placeholder="Write a comment..." onSubmit={sendComment} onInputChange={onCommentChange } />
        {comments &&
          comments.map((content) => {
            return (
              content.message && (
                <CommentModal
                  user={content.user}
                  key={content._id}
                  inputValue={content.message}
                />
              )
            );
          })}
      </div>
    </div>
  );
}

export default Post;
