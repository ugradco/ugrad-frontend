import React from "react";

import styles from "./style.module.css";
import Photo from "../Avatar";
import IconButton from "../Button/icon";
import * as Icon from "../icons";
import WriteCommentModal from "../WriteCommentModal/WriteCommentModal.component";
import CommentModal from "../CommentModal/CommentModal.component";
import ThemeButton from "../ThemeButton/index";

function Post({
  post,
  upvoteAPI,
  reportAPI,
  text,
  isUserPublic,
  user,
  registeredUser,
  comments,
  sendComment,
  tags,
  feedAPI,
}) {
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
          <Photo name={user.alias} />
          <div className={styles.header}>
            <span className={styles.name}>{user.alias}</span> <span className={styles.shortBio}>{user.shortBio}</span>
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

          <div className={styles.content}>
            {text}
            {"\n\n"}
            <div className={styles.tags}>{tags && tags.map((tag) => `#${tag}    `)}</div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div>
        <WriteCommentModal
          user={registeredUser}
          isUserPublic={isUserPublic}
          inputType="new"
          inputValue={message}
          placeholder="Write a comment..."
          onSubmit={sendCommentClicked}
          onInputChange={onCommentChange}
        />
        {comments &&
          comments.slice(0, 2).map((content) => {
            return (
              content.message && (
                <div>
                  <CommentModal
                    user={content.user}
                    key={content._id}
                    inputValue={content.message}
                    comments={content.comments}
                    postId={post._id}
                    commentId={content._id}
                    feedAPI={feedAPI}
                  />
                  {content.comments &&
                    content.comments.map((comContent) => {
                      return (
                        content.message && (
                          <div className={styles.secondaryComment}>
                            <CommentModal
                              user={comContent.user}
                              key={comContent._id}
                              inputValue={comContent.message}
                              comments={comContent.comments}
                              feedAPI={feedAPI}
                              isReplied
                            />
                          </div>
                        )
                      );
                    })}
                </div>
              )
            );
          })}
        {comments &&
          showComments &&
          comments.slice(2).map((content) => {
            return (
              content.message && (
                <div>
                  <CommentModal
                    user={content.user}
                    key={content._id}
                    inputValue={content.message}
                    comments={content.comments}
                    postId={post._id}
                    commentId={content._id}
                    feedAPI={feedAPI}
                  />
                  {content.comments &&
                    content.comments.map((comContent) => {
                      return (
                        content.message && (
                          <div className={styles.secondaryComment}>
                            <CommentModal
                              user={comContent.user}
                              key={comContent._id}
                              inputValue={comContent.message}
                              comments={comContent.comments}
                              feedAPI={feedAPI}
                              isReplied
                            />
                          </div>
                        )
                      );
                    })}
                </div>
              )
            );
          })}
        {comments.length > 2 &&
          (showComments ? (
            <ThemeButton className={styles.commentButton} onClick={onShow}>
              Show less comments
            </ThemeButton>
          ) : (
            <ThemeButton className={styles.commentButton} onClick={onShow}>
              {comments.length !== 3 ? `${comments.length - 2} more comments` : "1 more comment"}
            </ThemeButton>
          ))}
      </div>
    </div>
  );
}

export default Post;
