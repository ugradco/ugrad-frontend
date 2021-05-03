import React from "react";

import styles from "./style.module.css";
import Photo from "../Photo";
import IconButton from "../Button/icon";
import * as Icon from "../icons";
import WriteCommentModal from "../WriteCommentModal/WriteCommentModal.component";
import CommentModal from "../CommentModal/CommentModal.component";
import ThemeButton from "../ThemeButton/index";

function Post({ post, upvoteAPI, reportAPI, text, user, comments, sendComment }) {
  const [showComments, setShowComments] = React.useState(false);
  const [upSelected, upSelectedSet] = React.useState(post.upvoted);
  const [message, setMessage] = React.useState("");

  const upClicked = () => {
    upSelectedSet(!upSelected);
    upvoteAPI(post._id, upSelected);
  };

  const reportClicked = () => {
    reportAPI(post._id);
  };

  const onCommentChange = (e) => {
    setMessage(e.target.value);
  };

  const sendCommentClicked = () => {
    sendComment(post._id, message);
    setMessage("");
  };

  const onShow = () => {
    setShowComments(!showComments);
  };

  return (
    <div className={styles.feed}>
      <div className={styles.post}>
        {/* avatar */}
        <div className={styles.avatar}>
          <Photo />
          <div className={styles.header}>
            <span className={styles.name}>{user.alias}</span> <span className={styles.name}>{user.shortBio}</span>
          </div>
          <IconButton className={styles.reportButton} onClick={reportClicked}>
            Report
          </IconButton>
        </div>

        {/* body */}
        <div className={styles.body}>
          {/* up vote */}
          <IconButton
            className={styles.upButton}
            text="Up"
            count={post.upvoteCount}
            selected={upSelected}
            onClick={upClicked}
          >
            {upSelected && <Icon.Upvote fill="#343264" />}
            {!upSelected && <Icon.Upvote />}
          </IconButton>

          <div className={styles.content}>{text}</div>
        </div>
      </div>
      <ThemeButton className={styles.commentButton} onClick={onShow}>
        {comments.length !== 0
          ? comments.length !== 1
            ? `${comments.length} Comments`
            : `${comments.length} Comment`
          : ""}
      </ThemeButton>
      <div>
        <WriteCommentModal
          inputType="new"
          inputValue={message}
          placeholder="Write a comment..."
          onSubmit={sendCommentClicked}
          onInputChange={onCommentChange}
        />
        {comments &&
          showComments &&
          comments.map((content) => {
            return (
              content.message && <CommentModal user={content.user} key={content._id} inputValue={content.message} />
            );
          })}
      </div>
    </div>
  );
}

export default Post;
