import React from "react";

import { getItemFromLocalStorage } from "Utils/Helpers/storage.helpers";
import styles from "./CommentModal.module.css";
import Photo from "../Avatar/index";
import ThemeButton from "../ThemeButton/index";
import Input from "../InputBox/Input.component";
import { apiGenerator } from "../../Utils";
import { API_ENDPOINTS } from "../../Constants/api.constants";

function CommentModal({ inputValue, user, isReplied = false, postId, commentId, feedAPI }) {
  const [message, setMessage] = React.useState("");
  const [showReplyModal, setshowReplyModal] = React.useState(false);
  const isPublic = getItemFromLocalStorage("isPublic") ? getItemFromLocalStorage("isPublic") : false;
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const replyAPI = () => {
    apiGenerator("post")(API_ENDPOINTS.SEND_COMMENT, {
      postId,
      commentId,
      message,
      isPublic,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your reply operation.");
        }
        setshowReplyModal(!showReplyModal);
        feedAPI({});
      })
      .catch((error) => {
        console.error("There has been a problem with your reply operation:", error);
      });
  };

  const onReply = () => {
    setshowReplyModal(!showReplyModal);
    setMessage("");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.avatar}>
        <Photo name={user.alias} />
        <div className={styles.header}>
          <span className={styles.name}>{user.alias}</span> <span className={styles.shortBio}>{user.shortBio}</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{inputValue}</div>
        {!isReplied && (
          <ThemeButton className={styles.postButton} onClick={onReply}>
            Reply
          </ThemeButton>
        )}
      </div>
      {showReplyModal && (
        <div className={styles.replyBox}>
          <Input
            style={styles.textarea}
            name="reply"
            type="reply"
            placeholder="Write a comment reply..."
            value={message}
            onChange={onChange}
          />
          <ThemeButton className={styles.postButton} onClick={replyAPI}>
            Post
          </ThemeButton>
        </div>
      )}
    </div>
  );
}

export default CommentModal;
